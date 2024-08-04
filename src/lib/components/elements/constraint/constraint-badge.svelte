<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Chip from "$lib/components/ui/chip/chip.svelte";
  import PersonName from "$lib/components/elements/person/person-name.svelte";
  import { ClipboardXIcon, DraftingCompassIcon, MapPinOffIcon, PlusIcon, UserXIcon } from "lucide-svelte";
  import { ChipVariant } from "$lib/components/ui/chip";

  let constraint: Constraint | undefined;
  let popoverEnabled: boolean = true;
  let className: string = "";
  let placeholder: string = "No constraint selected";
  let variant: ChipVariant = ChipVariant.default;
  let assignedVariant: ChipVariant = ChipVariant.destructiveOutline;

  // noinspection ReservedWordAsName
  export { constraint, variant, popoverEnabled, placeholder, className as class };
</script>


<Tooltip.Root>
  <Tooltip.Trigger>
    {#if constraint === undefined}
      <Chip class={className} {variant}>
        <DraftingCompassIcon slot="icon" />
        <PlusIcon slot="hover_icon" />
      </Chip>
    {:else}
      {#if constraint.type === ConstraintType.NO_WORK_TOGETHER}
        <Chip variant={assignedVariant}>
          <UserXIcon slot="icon" class="h-5 w-5" />
        </Chip>
      {:else if constraint.type === ConstraintType.NO_PERSON_AT_LOCATION}
        <Chip variant={assignedVariant}>
          <MapPinOffIcon slot="icon" class="h-5 w-5" />
        </Chip>
      {:else if constraint.type === ConstraintType.NO_TASK_AT_LOCATION}
        <Chip variant={assignedVariant}>
          <MapPinOffIcon slot="icon" class="h-5 w-5" />
        </Chip>
      {:else if constraint.type === ConstraintType.PERSON_CANNOT_DO_TASK}
        <Chip variant={assignedVariant}>
          <ClipboardXIcon slot="icon" class="h-5 w-5" />
        </Chip>
      {:else}
        <Chip variant={assignedVariant}>
          <svelte:fragment slot="icon">??</svelte:fragment>
        </Chip>
      {/if}
    {/if}
  </Tooltip.Trigger>
  {#if popoverEnabled}
    <Tooltip.Content class="max-w-[250px] overflow-visible">
      {#if constraint}
        {#if constraint.type === ConstraintType.NO_WORK_TOGETHER}
          <p class="align-middle">
            <PersonName person={constraint.people[0]} />
            cannot work with
            <PersonName person={constraint.people[1]} />
          </p>
        {:else if constraint.type === ConstraintType.NO_PERSON_AT_LOCATION}
          <p class="align-middle">
            <PersonName person={constraint.person} />
            cannot work at {constraint.location.name}
          </p>
        {:else if constraint.type === ConstraintType.NO_TASK_AT_LOCATION}
          <p>
            Task "{constraint.task.name}" cannot be done at {constraint.location.name}
          </p>
        {:else if constraint.type === ConstraintType.PERSON_CANNOT_DO_TASK}
          <p>
            <PersonName person={constraint.person} />
            cannot do task "{constraint.task.name}"
          </p>
        {:else}
          <p>
            Bad constraint "{JSON.stringify(constraint)}"
          </p>
        {/if}
      {:else }
        {placeholder}
      {/if}
    </Tooltip.Content>
  {/if}
</Tooltip.Root>