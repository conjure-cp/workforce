<!--
Columns of the calendar, each representing a day
-->
<script lang="ts">
  import type { CalendarDate } from "@internationalized/date";
  import DayHeader from "./day-header.svelte";
  import TimeGrid from "./time-grid.svelte";
  import type { CalendarContext } from "./types";

  export let day: CalendarDate;
  export let context: CalendarContext;
  let extraStyle = "";
  let className = "";

  const props = context.props;

  $: start = $props.startTime;
  $: end = $props.endTime;
  $: step = $props.step;
  $: precision = $props.precision;
  $: line = $props.line;
  $: columnGap = $props.columnGap;
  $: hidden = day.compare($props.startDate) < 0 || day.compare($props.endDate) > 0;
  $: style = hidden
    ? "display: none;"
    : `
    border-left: ${line} solid hsl(var(--muted-foreground) / 0.3); \
    ${extraStyle}
  `;

  export { className as class, extraStyle as style };
</script>

<div class="flex flex-1 flex-col items-center {className}" {style}>
  <TimeGrid
    let:tgContext
    {start}
    {end}
    {precision}
    {step}
    hLineWidth={line}
    showTime={false}
    padRight={columnGap}
    class="h-full w-full"
  >
    <div
      class="flex items-center justify-center bg-accent"
      style="grid-row: 1; grid-column: 1 / span all"
    >
      <DayHeader {day} class="" />
    </div>
    <slot {tgContext} />
  </TimeGrid>
</div>
