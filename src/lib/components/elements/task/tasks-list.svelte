<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import TaskBadge from "$lib/components/elements/task/task-badge.svelte";

  let tasks: Task[] = [];
  let placeholder: string = "No tasks";
  let compact: boolean = true;
  let className: string = "";

  export { tasks, compact, className as class };
</script>

{#if tasks.length > 0}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap {className}">
    {#each tasks as task}
      <TaskBadge {task} {compact} />
    {/each}
  </div>
{:else}
  <div class="text-accent-foreground {className}">{placeholder}</div>
{/if}