<!--
# Headless Event Calendar Component

This component takes child elements which provide a start and end datetime and positions them on a calendar grid automatically.
It also handles overlapping events by displaying them in multiple sub-columns, similar to how Outlook does.
The content inside `TimeGridItem` (i.e. child elements) can be any arbitrary Svelte code!

## Usage

Content cards must be wrapped in `TimeGridItem` components that specify a start and end time.
They are positioned inside columns. Currently, the columns are defined manually - the component handles positioning within one day, but not across days.

For example:

```svelte
<EventCalendar
  let:context
  ...
>
  <DayColumn let:tgContext {context} {parseDate("2025-01-01")}>
    <TimeGridItem {tgContext} start={new Time(9, 0)} end={new Time(12, 0)} class="bg-yellow-500 bg-opacity-30">
      <div>Hello</div>
    </TimeGridItem>
    <TimeGridItem {tgContext} start={new Time(10, 0)} end={new Time(15, 0)} class="bg-yellow-500 bg-opacity-30">
      <button>Click me!</button>
    </TimeGridItem>
    <TimeGridItem {tgContext} start={new Time(12, 0)} end={new Time(18, 0)} class="bg-yellow-500 bg-opacity-30">
      <p>World</p>
    </TimeGridItem>
  </DayColumn>
  <DayColumn let:tgContext {context} {parseDate("2025-01-02")}>
    <TimeGridItem {tgContext} start={new Time(9, 30)} end={new Time(12, 0)} class="bg-yellow-500 bg-opacity-30">
      <div>Column 2</div>
    </TimeGridItem>
  </DayColumn>
</EventCalendar>
```

This will create 2 lanes for Jan 1st: one for the (9:00-12:00) and (12:00-18:00) events, and one for the (10:00-15:00) event.
The second column will have a single lane containing the (9:30-12:00) event. 
Thus, overlapping events are displayed alongside instead of clipping each other.

## Mechanism

To implement the automatic positioning, we use a shared "context" store.
Parent elements create it and set up callbacks to update the grid when values change.
Children take a reference to it and mutate it when they are mounted, changed, or removed. 
The parent calculates their new final positions and updates the context, which children then use to re-render themselves.

## Props
- `startDate`: The start date of the calendar. This is the first day that will be displayed. DayColumns before this date will be hidden initially.
- `endDate`: The end date of the calendar.
- `startTime`: The start time of the calendar. Grid items starting before this time will be clipped.
- `endTime`: The end time of the calendar. Grid items ending after this time will be clipped.
- `step`: The resolution of the visible time grid, in minutes. For example, if `step=60`, there will be one row for each hour.
- `precision`: The resolution of the grid used to position events. Start/end times of child elements are rounded to its nearest multiple.
- `columnGap`: The gap between columns. Can be a CSS string (e.g. "30px", "2rem") or a number (e.g. 30 - equivalent to "30px").
- `line`: The width of the lines in the grid. CSS string (e.g. "1px", "2px", "0.5rem"), defaults to "1px".
- `calendarHeight`: The height of the calendar. CSS string; defaults to "1800px". Overflowing content is scrollable.

See also: time-grid-item.svelte, day-column.svelte, time-grid.svelte
-->
<script lang="ts">
  import { CalendarDate, Time } from "@internationalized/date";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { writable, type Writable } from "svelte/store";
  import Button from "../ui/button/button.svelte";
  import TimeGrid from "./time-grid.svelte";
  import type { CalendarContext, CalendarProps } from "./types";
  import { fmtDateRange } from "$lib/model/temporal/utils";

  export let startDate: CalendarDate;
  export let endDate: CalendarDate;
  export let startTime: Time = new Time(0, 0);
  export let endTime: Time = new Time(23, 59);
  export let step = 30;
  export let precision = 5;
  export let columnGap = "0.5rem";
  // export let innerGap: string | undefined = undefined;
  export let line = "1px";
  export let calendarHeight = "1800px";
  let className = "";

  const props: Writable<CalendarProps> = writable({
    startDate,
    endDate,
    startTime,
    endTime,
    step,
    precision,
    columnGap,
    // innerGap,
    line,
  });
  const context: CalendarContext = { props };

  $: props.set({
    startDate,
    endDate,
    startTime,
    endTime,
    step,
    precision,
    columnGap,
    // innerGap,
    line,
  });

  function shiftLeft() {
    console.log("Shifting left");
    startDate = startDate.subtract({ days: 1 });
    endDate = endDate.subtract({ days: 1 });
    console.log(startDate, endDate);
  }

  function shiftRight() {
    console.log("Shifting right");
    startDate = startDate.add({ days: 1 });
    endDate = endDate.add({ days: 1 });
    console.log(startDate, endDate);
  }

  export { className as class };
</script>

<div class="flex flex-col {className}">
  <div class="z-20 flex flex-row items-center gap-4 p-2 shadow">
    <Button on:click={shiftLeft} size="icon" variant="ghost">
      <ChevronLeft />
    </Button>
    <Button on:click={shiftRight} size="icon" variant="ghost">
      <ChevronRight />
    </Button>
    <h2 class="text-lg font-semibold text-primary">
      {fmtDateRange(startDate, endDate)}
    </h2>
  </div>
  <div class="flex h-full w-full flex-col overflow-y-scroll">
    <div
      class="main-container flex w-full flex-row"
      style="height: {calendarHeight}; --line: {line}"
    >
      <TimeGrid
        start={startTime}
        end={endTime}
        {precision}
        {step}
        hLineWidth={line}
        showTime={true}
        vLineWidth="0px"
        class="w-14 bg-accent"
      >
        <div class="bg-accent" style="grid-row: 1; grid-column: 1 / span all" />
      </TimeGrid>
      <slot {context} />
    </div>
  </div>
</div>

<style>
  .main-container {
    border: var(--line) solid hsl(var(--muted-foreground) / 0.3);
  }
</style>
