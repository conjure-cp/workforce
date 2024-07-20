<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from "bits-ui";
  import * as RangeCalendar from "./index.js";
  import { cn } from "$lib/utils.js";

  type $$Props = RangeCalendarPrimitive.Props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Events = RangeCalendarPrimitive.Events;

  let value: $$Props["value"] = undefined;
  let placeholder: $$Props["placeholder"] = undefined;
  let weekdayFormat: $$Props["weekdayFormat"] = "short";
  let startValue: $$Props["startValue"] = undefined;
  let className: $$Props["class"] = undefined;

  // noinspection ReservedWordAsName
  export { value, placeholder, weekdayFormat, startValue, className as class };
</script>

<RangeCalendarPrimitive.Root
  on:keydown
  bind:value
  bind:placeholder
  bind:startValue
  {weekdayFormat}
  class={cn("p-3", className)}
  {...$$restProps}
  let:months
  let:weekdays
>
  <RangeCalendar.Header>
    <RangeCalendar.PrevButton />
    <RangeCalendar.Heading />
    <RangeCalendar.NextButton />
  </RangeCalendar.Header>
  <RangeCalendar.Months>
    {#each months as month}
      <RangeCalendar.Grid>
        <RangeCalendar.GridHead>
          <RangeCalendar.GridRow class="flex">
            {#each weekdays as weekday}
              <RangeCalendar.HeadCell>
                {weekday.slice(0, 2)}
              </RangeCalendar.HeadCell>
            {/each}
          </RangeCalendar.GridRow>
        </RangeCalendar.GridHead>
        <RangeCalendar.GridBody>
          {#each month.weeks as weekDates}
            <RangeCalendar.GridRow class="mt-2 w-full">
              {#each weekDates as date}
                <RangeCalendar.Cell {date}>
                  <RangeCalendar.Day {date} month={month.value} />
                </RangeCalendar.Cell>
              {/each}
            </RangeCalendar.GridRow>
          {/each}
        </RangeCalendar.GridBody>
      </RangeCalendar.Grid>
    {/each}
  </RangeCalendar.Months>
</RangeCalendarPrimitive.Root>
