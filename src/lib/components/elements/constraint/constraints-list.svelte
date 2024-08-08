<script lang="ts">
  import ConstraintBadge from "$lib/components/elements/constraint/constraint-badge.svelte";
  import { type Constraint, type ConstraintOperand } from "$lib/types/constraints.ts";

  let constraints: Constraint[] = [];
  let forOperand: ConstraintOperand | undefined = undefined;
  let placeholder: string = "No constraints";

  export { constraints, forOperand };
</script>

{#if constraints.length > 0}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each constraints as constraint}
      <ConstraintBadge {constraint} {forOperand} />
    {/each}
  </div>
{:else}
  <div class="text-accent-foreground">{placeholder}</div>
{/if}