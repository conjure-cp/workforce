<script lang="ts">
  // noinspection ES6UnusedImports
  import * as Card from "$lib/components/ui/card/index.ts";
  import type { Shift } from "$lib/types/core.ts";
  import Task from "../task/task-card.svelte";
  import { ClockIcon, MapPinIcon } from "lucide-svelte";
  import { capitalize } from "$lib/utils.ts";

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
      {shift.start_time_fmt} - {shift.end_time_fmt}
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