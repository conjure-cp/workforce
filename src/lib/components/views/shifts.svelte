<script lang="ts">
  import DayColumn from "$lib/components/event-calendar/day-column.svelte";
  import EventCalendar from "$lib/components/event-calendar/event-calendar.svelte";
  import { state as GLOBAL_STATE, Shift } from "$lib/model";
  import { allDaysBetween } from "$lib/model/temporal/utils";
  import Color from "color";
  import {
    getLocalTimeZone,
    isSameDay,
    Time,
    today,
    toTime,
    type CalendarDate,
  } from "@internationalized/date";
  import type { Writable } from "svelte/store";
  import TimeGridItem from "../event-calendar/time-grid-item.svelte";

  export let startDate: CalendarDate = today(getLocalTimeZone());
  export let endDate: CalendarDate = startDate.add({ days: 7 });
  export let startTime: Time = new Time(0, 0);
  export let endTime: Time = new Time(23, 59);
  let className = "";

  const shifts: Writable<Shift[]> = GLOBAL_STATE.shifts;

  $: days = allDaysBetween(startDate, endDate);

  function mkColor(shift: Shift) {
    const color = shift.icon?.color ?? new Color("#62748E");
    return color.lighten(0.3).hex();
  }

  export { className as class };
</script>

<EventCalendar
  let:context
  bind:startDate
  bind:endDate
  bind:startTime
  bind:endTime
  class="h-dvh w-full {className}"
>
  {#each days as day}
    <DayColumn let:tgContext {context} {day}>
      {#each $shifts as shift}
        {#each shift.occurrencesOn(day) as occurrence}
          {@const overflowsStart = !isSameDay(occurrence.start, day)}
          {@const overflowsEnd = !isSameDay(occurrence.end, day)}
          {@const start = isSameDay(occurrence.start, day) ? toTime(occurrence.start) : startTime}
          {@const end = isSameDay(occurrence.end, day) ? toTime(occurrence.end) : endTime}
          <TimeGridItem
            {tgContext}
            {start}
            {end}
            class="pl-1 pr-1 {overflowsStart ? 'pt-0' : 'pt-1'} {overflowsEnd ? 'pb-0' : 'pb-1'}"
          >
            <div
              style="background-color: {mkColor(shift)}"
              class="h-full w-full shadow {overflowsStart ? '' : 'rounded-t-lg'} {overflowsEnd
                ? ''
                : 'rounded-b-lg'}"
            >
              <p>{shift.name}</p>
              <p>
                {occurrence.start.toDate().toLocaleString()} - {occurrence.end
                  .toDate()
                  .toLocaleString()}
              </p>
            </div>
          </TimeGridItem>
        {/each}
      {/each}
    </DayColumn>
  {/each}
</EventCalendar>
