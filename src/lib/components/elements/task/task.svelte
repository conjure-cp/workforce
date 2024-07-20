<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import PeopleSelectorList from "$lib/components/elements/person/people-selector-list.svelte";
  import { capitalize } from "$lib/utils.ts";

  let task: Task;
  let compact: boolean = false;

  export { task, compact };
</script>


<div class="w-full p-2 flex flex-col gap-2 bg-accent border-0 border-l-4 border-l-accent-foreground">
  <h3 class="ml-2 font-semibold">{capitalize(task.name)}</h3>

  <div class="flex flex-col items-start justify-start gap-2 w-full transition-all {compact ? 'h-0' : 'h-fit'}">

    <p>
      {task.description}
    </p>
  </div>

  <PeopleSelectorList people={task.people} min_people={task.min_people} max_people={task.max_people} />
</div>