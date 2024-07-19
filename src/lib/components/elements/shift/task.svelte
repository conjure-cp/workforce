<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import PeopleSelectorList from "$lib/components/elements/person/people-selector-list.svelte";
  import { capitalize } from "$lib/utils.ts";

  let task: Task;

  export { task };
</script>

<div class="bg-accent border-0 border-l-4 border-l-accent-foreground w-full p-2">
  <h3 class="ml-2 mb-2 font-semibold">{capitalize(task.name)}</h3>
  <PeopleSelectorList people={task.people} min_people={task.min_people} max_people={task.max_people} />
</div>