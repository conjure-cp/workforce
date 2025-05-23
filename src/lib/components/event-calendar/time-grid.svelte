<!--
# TimeGrid Component

A grid that positions TimeGridItems on a calendar grid automatically.
-->
<script lang="ts">
  import { fmtTime, minutesBetween, toMinutes } from "$lib/model/temporal/utils";
  import { Time } from "@internationalized/date";
  import { writable } from "svelte/store";
  import type { TimeGridContext, TimeGridProps } from "./types";

  export let start: Time = new Time(0, 0);
  export let end: Time = new Time(23, 59);
  export let step = 30;
  export let precision = 5;
  export let showTime = true;
  export let columnGap = "0.5rem";
  export let hLineWidth = "1px";
  export let vLineWidth: string | undefined = undefined;
  export let padLeft = "0px";
  export let padRight = "0px";
  export let style = "";
  let className = "";

  // Set up the content
  const props = writable<TimeGridProps>({ start, end, step, precision, columnGap, showTime });
  const intervals = writable(new Map<string, { start: Time; end: Time }>());
  const startCols = writable(new Map<string, number>());
  const endCols = writable(new Map<string, number>());
  export const tgContext: TimeGridContext = { props, intervals, startCols, endCols };

  // Reactive variables
  $: tgContext.props.set({ start, end, step, precision, columnGap, showTime });
  $: rows = Math.ceil(minutesBetween(start, end) / precision);
  $: visibleRows = Math.ceil(minutesBetween(start, end) / step);
  $: colGap = $props.columnGap;
  $: colVals = Array.from($startCols.values());
  $: cols = Math.max(...colVals, 0);

  // Fires every time the intervals change (i.e. any event is added, rescheduled, or removed)
  tgContext.intervals.subscribe((val) => {
    interface Event {
      key: string;
      start: number;
      end: number;
    }

    // New start and end columns for each event ID. Children will use these to re-position themselves.
    const startCols = new Map<string, number>();
    const endCols = new Map<string, number>();

    // Events with their start and end times in minutes
    const events: Event[] = [];

    val.forEach((interval, key) => {
      events.push({ key, start: toMinutes(interval.start), end: toMinutes(interval.end) });
    });

    // Sort events by start time (ascending), then end time as tie-breaker (descending)
    // Results in the minimum necessary number of lanes, with longer events to the left (which looks more natural)
    events.sort((a, b) => a.start - b.start || b.end - a.end);

    const columns: number[] = [];
    let ongoing: [Event, number][] = [];

    // A basic greedy algorithm to find the columns
    events.forEach((event) => {
      const { key, start, end } = event;
      let thisStartCol = -1; // Starting column for the new event
      let thisEndCol = Infinity; // Ending column for the new event. Initially, assume it can span all columns

      // Find the first column that is available for this event
      for (let i = 0; i < columns.length; i++) {
        if (columns[i] <= start) {
          columns[i] = end;
          thisStartCol = i + 1;
          break;
        }
      }

      // All columns are occupied, so we need to add a new one
      if (thisStartCol === -1) {
        columns.push(end);
        thisStartCol = columns.length;
      }

      // Update the end column for ongoing events
      let newOngoing: [Event, number][] = [];
      ongoing.forEach(([ev, evEndCol]) => {
        if (ev.end <= start) {
          // Event has ended, save its final end column and remove it from the ongoing list
          endCols.set(ev.key, evEndCol);
        } else {
          // Event is still ongoing (i.e overlaps with the current one)
          const evStartCol = startCols.get(ev.key) ?? evEndCol;
          if (evStartCol >= thisStartCol) {
            // This event has a higher start column than us. We have to constrain our end column.
            thisEndCol = Math.min(thisEndCol, evStartCol - 1);
          } else {
            // This event has a lower start column than us. We can shrink its end column.
            newOngoing.push([ev, Math.min(evEndCol, thisStartCol - 1)]);
          }
        }
      });
      newOngoing.push([event, thisEndCol]);
      ongoing = newOngoing;

      startCols.set(key, thisStartCol);
    });

    // Save the final end columns for all remaining events
    ongoing.forEach(([ev, col]) => {
      endCols.set(ev.key, col);
    });

    // Sanity check on end columns: not less than start columns, not more than total columns
    for (const [key, col] of endCols) {
      endCols.set(key, Math.max(Math.min(col, columns.length), startCols.get(key) ?? 1));
    }

    tgContext.startCols.set(startCols);
    tgContext.endCols.set(endCols);
  });

  export { className as class };
</script>

<div class={className} {style}>
  <!--
  Layout is as follows:
  - Fixed top row for headers
  - Remaining rows are the time grid
  - Leftmost column is the time labels, the rest are the grid columns, a final column is added for padding

  Variable meanings:
  - rows: number of rows in the grid
  - cols: number of columns in the grid
  - colGap: gap between columns (currenly not used)
  - hLineWidth: thickness of the horizontal lines
  - vLineWidth: thickness of the vertical lines
  - padRight: padding on the right side of the grid
  -->
  <div
    class="time-grid"
    style="--rows: {rows}; --cols: {cols}; --colGap: {colGap}; --hLineWidth: {hLineWidth}; --vLineWidth: {vLineWidth ??
      hLineWidth}; --padRight: {padRight}"
  >
    {#each Array.from({ length: visibleRows }) as _, i}
      <!-- Render the time labels and row lines. Depends on the grid step. -->
      {@const rw = Math.ceil((i * $props.step) / $props.precision) + 2}
      <div class="hline-container" style="grid-row: {rw}; grid-column: 1 / span all">
        <div class="hline"></div>
      </div>
      <!-- Container for the time label, positioned in column 1 -->
      <div
        class="time-container"
        style="grid-row: {rw}; grid-column: 1; width: {showTime ? 'fit-content' : padLeft}"
      >
        <span class={showTime ? "ml-1 mt-1 text-muted-foreground" : "invisible"}>
          {fmtTime($props.start.add({ minutes: i * $props.step }))}
        </span>
      </div>
    {/each}
    <!-- If the time column isn't hidden, render a vertical line after it -->
    {#if showTime}
      <div class="vline-container" style="grid-row: 1 / span all; grid-column: 1">
        <div class="vline"></div>
      </div>
    {/if}
    <!-- The rest is our TimeGridItems -->
    <slot {tgContext} />
  </div>
</div>

<style>
  .time-grid {
    display: grid;
    grid-template-rows: 2rem repeat(var(--rows), 1fr);
    grid-template-columns: min-content repeat(var(--cols), 1fr) var(--padRight);
    row-gap: var(--hLineWidth);
    width: 100%;
    height: 100%;
  }

  .time-container {
    overflow: hidden;
    height: fit-content;
  }

  .hline-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .vline-container {
    position: relative;
    display: flex;
    align-items: center;
  }

  .vline {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--vLineWidth);
    background-color: hsl(var(--muted-foreground) / 0.3);
  }

  .hline {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: var(--hLineWidth);
    margin-top: calc(var(--hLineWidth) * -1);
    background-color: hsl(var(--muted-foreground) / 0.3);
  }
</style>
