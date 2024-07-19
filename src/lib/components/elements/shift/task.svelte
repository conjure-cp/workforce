<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import PersonSelector from "$lib/components/elements/person/person-selector.svelte";
  import { capitalize } from "$lib/utils.ts";

  let task: Task;
  let unfilled_slots: number = Math.max(0, task.min_people - task.people.length);
  let optional_slots: number = Math.max(0, task.max_people - task.min_people);

  export { task };
</script>

<div class="bg-accent border-0 border-l-4 border-l-accent-foreground w-full p-2">
  <h3 class="ml-2 mb-2 font-semibold">{capitalize(task.name)}</h3>
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each task.people as person}
      <PersonSelector person={person} />
    {/each}
    {#each { length: unfilled_slots } as _} <!-- eslint-disable-line -->
      <PersonSelector person={undefined} />
    {/each}
    {#each { length: optional_slots } as _} <!-- eslint-disable-line -->
      <PersonSelector person={undefined} />
    {/each}
  </div>
</div>