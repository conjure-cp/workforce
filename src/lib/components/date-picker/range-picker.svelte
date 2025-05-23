<!--
# (Date) Range Picker Component

A dropdown with a calendar that allows the user to select a date range (start - end).
See also: `date-picker.svelte` - the APIs are essentially the same.
-->
<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Popover from "$lib/components/ui/popover";
  import { fmtDateRange, weekStartsOn } from "$lib/model/temporal/utils";
  import { cn } from "$lib/utils/ui.js";
  import { type DateValue } from "@internationalized/date";
  import CalendarIcon from "lucide-svelte/icons/calendar";
  import RangeCalendar from "../ui/range-calendar/range-calendar.svelte";
  import type { DateRange } from "bits-ui";

  const wkSt = weekStartsOn(navigator.language || "en-GB");

  let value: DateRange | undefined = undefined;
  let minValue: DateValue | undefined = undefined;
  let maxValue: DateValue | undefined = undefined;
  let placeholder = "Select a date range";
  let id: string | undefined = undefined;
  let className = "";
  let open = false;
  let onChange: (value: DateRange) => void = () => {};
  let disabled = false;

  $: fmtdValue = value ? fmtDateRange(value.start, value.end) : "";

  export { value, id, placeholder, onChange, disabled, className as class };
</script>

<Popover.Root openFocus bind:open>
  <Popover.Trigger asChild let:builder {disabled}>
    <Button
      aria-expanded={open}
      {id}
      {disabled}
      variant="outline"
      class={cn(
        "w-max min-w-40 justify-start text-left font-normal",
        !value && "text-muted-foreground",
        className,
      )}
      builders={[builder]}
    >
      <CalendarIcon class="mr-2 h-4 w-4" />
      {fmtdValue || placeholder}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-auto p-0">
    <RangeCalendar
      bind:value
      initialFocus
      onValueChange={onChange}
      {disabled}
      {minValue}
      {maxValue}
      weekStartsOn={wkSt}
    />
  </Popover.Content>
</Popover.Root>
