<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.ts";
  import type { Shift } from "$lib/types/core.ts";
  import Task from "./lib/task.svelte";
  import { ClockIcon, MapPinIcon } from "lucide-svelte";

  let shift: Shift;

  export { shift };
</script>

<Card.Root class="w-full">
  <Card.Header>
    <Card.Title>{shift.name}</Card.Title>
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
    <div class="flex flex-col items-stretch justify-start gap-3 w-full ">
      {#each shift.tasks as task}
        <Task task={task} />
      {/each}
    </div>
  </Card.Content>
</Card.Root>