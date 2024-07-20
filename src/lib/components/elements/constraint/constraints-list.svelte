<script lang="ts">
  import ConstraintBadge from "$lib/components/elements/constraint/constraint.svelte";
  import type { Constraint } from "$lib/types/constraints.ts";

  let constraints: Constraint[] = [];
  let placeholder: string = "No constraints";

  export { constraints };
</script>

{#if constraints.length > 0}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each constraints as constraint}
      <ConstraintBadge constraint={constraint} />
    {/each}
  </div>
{:else}
  <div class="text-accent-foreground">{placeholder}</div>
{/if}