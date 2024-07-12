<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import PersonAvatar from "$lib/components/elements/person-avatar/person-avatar.svelte";

  let task: Task;
  let unfilled_slots: number = Math.max(0, task.min_people - task.people.length);
  let optional_slots: number = Math.max(0, task.max_people - task.min_people);

  export { task };
</script>

<div class="bg-accent border-0 border-l-4 border-l-accent-foreground w-full">
  <h3>{task.name}</h3>
  <div class="flex flex-row items-center justify-start gap-2">
    {#each task.people as person}
      <PersonAvatar person={person} />
    {/each}
    {#each { length: unfilled_slots } as _, i}
      <PersonAvatar person={undefined} />
    {/each}
    {#each { length: optional_slots } as _, i}
      <PersonAvatar person={undefined} />
    {/each}
  </div>
</div>