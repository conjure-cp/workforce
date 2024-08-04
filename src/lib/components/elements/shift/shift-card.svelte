<script lang="ts">
  // noinspection ES6UnusedImports
  import * as Card from "$lib/components/ui/card/index.ts";
  import type { Shift } from "$lib/types";
  import Task from "$lib/components/elements/task/task-card.svelte";
  import { ClockIcon, MapPinIcon } from "lucide-svelte";
  import { capitalize } from "$lib/utils.ts";
  import { fmtDateTime } from "$lib/utils.js";

  let shift: Shift;

  export { shift };
</script>

<Card.Root class="w-full bg-white shadow">
  <Card.Header>
    <Card.Title>{capitalize(shift.name)}</Card.Title>
    <Card.Description>{shift.description}</Card.Description>
  </Card.Header>

  <Card.Content class="flex flex-col items-start justify-start gap-3">
    <div class="flex flex-row items-center justify-start gap-2 w-full">
      <ClockIcon />
      {fmtDateTime(shift.start_date_time)} - {fmtDateTime(shift.end_date_time)}
    </div>
    <div class="flex flex-row items-center justify-start gap-2 w-full">
      <MapPinIcon />
      {shift.location.name}
    </div>
    <div class="flex flex-col items-stretch justify-start gap-3 w-full mt-4">
      {#each shift.tasks as task}
        <Task task={task} />
      {/each}
    </div>
  </Card.Content>
</Card.Root>