<!--
Usage example for the EventCalendar component.
-->
<script lang="ts">
  import { timeFromMinutes, toMinutes } from "$lib/model/temporal/utils";
  import { HashMap } from "$lib/utils";
  import {
    getLocalTimeZone,
    isSameDay,
    Time,
    today,
    type CalendarDate,
  } from "@internationalized/date";
  import { onMount } from "svelte";
  import DayColumn from "./day-column.svelte";
  import EventCalendar from "./event-calendar.svelte";
  import TimeGridItem from "./time-grid-item.svelte";

  export let startDate: CalendarDate = today(getLocalTimeZone());
  export let endDate: CalendarDate = startDate.add({ days: 7 });
  export let startTime: Time = new Time(8, 0);
  export let endTime: Time = new Time(21, 0);
  export let step = 30;
  export let precision = 5;

  interface Event {
    start: Time;
    end: Time;
    name: string;
  }
  let events = new HashMap<CalendarDate, Event[]>(
    undefined,
    (cd) => cd.toString(),
    (a, b) => isSameDay(a, b),
  );

  $: console.log(events);

  onMount(() => {
    console.log("Generating events");
    let day = startDate.subtract({ days: 7 });
    const endDt = endDate.add({ days: 7 });

    while (day.compare(endDt) <= 0) {
      let dayEvents: Event[] = [];
      for (let i = 0; i < Math.random() * 10; i++) {
        const steps = Math.floor((toMinutes(endTime) - toMinutes(startTime)) / step);
        const evStartStep = Math.floor(Math.random() * steps);
        const evEndStep = Math.floor(Math.random() * (steps - evStartStep)) + evStartStep + 1;
        const evStart = timeFromMinutes(toMinutes(startTime) + evStartStep * step);
        const evEnd = timeFromMinutes(toMinutes(startTime) + evEndStep * step);
        dayEvents.push({ start: evStart, end: evEnd, name: `Event ${i}` });
      }
      events.set(day, dayEvents);
      day = day.add({ days: 1 });
    }
    events = events;
  });
</script>

<EventCalendar
  let:context
  {startDate}
  {endDate}
  {startTime}
  {endTime}
  {step}
  {precision}
  calendarHeight="1500px"
  class="h-[900px]"
>
  {#each events as [day, dayEvents]}
    <DayColumn let:tgContext {context} {day}>
      {#each dayEvents as { start, end, name }}
        <TimeGridItem {tgContext} {start} {end} class="bg-yellow-500 bg-opacity-30">
          <div>{name}</div>
        </TimeGridItem>
      {/each}
    </DayColumn>
  {/each}
</EventCalendar>
