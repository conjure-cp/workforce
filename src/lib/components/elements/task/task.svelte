<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import PeopleSelectorList from "$lib/components/elements/person/people-selector-list.svelte";
  import { capitalize } from "$lib/utils.ts";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import Icon from "$lib/components/ui/icon/icon.svelte";

  let task: Task;
  let compact: boolean = false;

  export { task, compact };
</script>


<div class="group/task-card w-full p-2 flex flex-col gap-2 bg-accent border-0 border-l-4 border-l-accent-foreground">
  <h3 class="ml-1 font-semibold text-lg inline-flex flex-row justify-start items-center gap-2">
    <Icon icon={task.icon} variant="monochrome" class="text-muted-foreground" />
    {capitalize(task.name)}
  </h3>

  {#if !compact}
    <p class="ml-1 mb-2.5 text-muted-foreground">{task.description}</p>
  {/if}

  <PeopleSelectorList people={task.people} min_people={task.min_people} max_people={task.max_people} />
</div>