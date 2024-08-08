<script lang="ts">
  import PersonName from "$lib/components/elements/person/person-name.svelte";
  import { type Constraint, type ConstraintOperand, getOperands } from "$lib/types/constraints.ts";
  import { Type } from "$lib/types";

  let constraint: Constraint;
  let forOperand: ConstraintOperand | undefined = undefined;

  function getOp2(constraint: Constraint, op1: ConstraintOperand) {
    const rest = getOperands(constraint).filter((op) => op !== op1);
    return rest.length > 0 ? rest[0] : undefined;
  }

  $: op1 = forOperand ? forOperand : getOperands(constraint)[0];
  $: op2 = getOp2(constraint, op1);

  export { constraint, forOperand };
</script>

{#if op1.type === Type.Person}
  {#if op2}
    <PersonName person={op1} />
    {#if op2.type === Type.Person}
      cannot work with
      <PersonName person={op2} />
    {:else if op2.type === Type.Location}
      cannot work at <b>"{op2.name}"</b>
    {:else if op2.type === Type.Task}
      cannot do task <b>"{op2.name}"</b>
    {/if}
  {:else}
    ??
  {/if}
{:else if op1.type === Type.Location}
  {#if op2}
    <b>"{op1.name}"</b>
    {#if op2.type === Type.Person}
      cannot be staffed by
      <PersonName person={op2} />
    {:else if op2.type === Type.Task}
      cannot be used for task <b>"{op2.name}"</b>
    {/if}
  {:else }
    ??
  {/if}
{:else if op1.type === Type.Task}
  {#if op2}
    <b>"{op1.name}"</b>
    {#if op2.type === Type.Person}
      cannot be done by
      <PersonName person={op2} />
    {:else if op2.type === Type.Location}
      cannot be done at <b>"{op2.name}"</b>
    {/if}
  {:else}
    ??
  {/if}
{/if}
