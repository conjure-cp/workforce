<!--
Edit form for Shift objects.
Supports basic patterns (same start-end time every day; current default behavior) and complex
recurrence patterns (e.g. every 2nd Tuesday of the month).
The latter turned out to be unnecessary for our users, but it is fully supported in the model.
(In fact, the simple pattern is just a special case - but don't tell Oz :D)
-->
<script lang="ts">
  import { Shift } from "$lib/model";
  import RecurrenceOptionsEdit from "$lib/components/recurrence/recurrence_options_edit.svelte";
  import TimePicker from "$lib/components/time-picker/time-picker.svelte";
  import * as Select from "$lib/components/ui/select";
  import { Label } from "$lib/components/ui/label";
  import { Recurrence } from "$lib/model/temporal";
  import { toRecurrence, toSimplePattern, type SimplePattern } from "$lib/model/core/shift";

  export let item: Shift;

  function mkModeSelect(pattern: Recurrence | SimplePattern) {
    if (pattern instanceof Recurrence) {
      return { value: "complex", label: "Complex" };
    } else {
      return { value: "simple", label: "Simple" };
    }
  }

  const pattern = item.rPattern;
</script>

<div class="flex w-full flex-col gap-1.5">
  <!-- Contracted duration. (Some shifts count for more time than they actually are when calculating pay / hours) -->
  <Label class="font-semibold" for="duration">Contracted Duration</Label>
  <div class="flex flex-row items-center gap-2">
    <TimePicker id="duration" bind:value={item.paidDuration} />
    hours
  </div>
</div>
<div class="flex w-full flex-col gap-1.5">
  <span class="text-sm font-semibold">Pattern</span>
  <!-- Select simple or complex pattern -->
  <Select.Root
    selected={mkModeSelect($pattern)}
    onSelectedChange={(sel) => {
      if (!sel) return;
      switch (sel.value) {
        case "simple":
          pattern.update((p) => toSimplePattern(p));
          break;
        case "complex":
          pattern.update((p) => toRecurrence(p, item.state));
          break;
      }
    }}
  >
    <Select.Trigger class="w-[180px]">
      <Select.Value placeholder="Mode" />
    </Select.Trigger>
    <Select.Content>
      <Select.Item value="simple">Simple</Select.Item>
      <Select.Item value="complex">Complex</Select.Item>
    </Select.Content>
  </Select.Root>
</div>
{#if $pattern instanceof Recurrence}
  <!-- For complex patterns, show the recurrence options form -->
  <RecurrenceOptionsEdit bind:recurrence={$pattern.recurrenceOptions} />
{:else}
  <!-- For the basic pattern, show pickers for start/end time -->
  <div class="flex w-full flex-col gap-1.5">
    <Label class="font-semibold" for="start">Start Time</Label>
    <TimePicker id="start" bind:value={$pattern.start} />
  </div>
  <div class="flex w-full flex-col gap-1.5">
    <Label class="font-semibold" for="start">End Time</Label>
    <TimePicker id="start" bind:value={$pattern.end} />
  </div>
  <!-- Generate a human-friendly description. The `#key` block forces this to re-render when pattern changes. -->
  {#key $pattern}
    <p class="text-muted-foreground">
      Lasts {item.describePattern()} from {item.fmtStartTime()} to {item.fmtEndTime()}
    </p>
  {/key}
{/if}
