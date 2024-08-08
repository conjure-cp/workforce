<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { type Constraint, type ConstraintOperand } from "$lib/types/constraints.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import ConstraintTooltip from "$lib/components/elements/constraint/lib/constraint-tooltip.svelte";
  import Chip from "$lib/components/ui/chip/chip.svelte";
  import Icon from "$lib/components/ui/icon/icon.svelte";
  import { getIcon } from "./lib/utils.ts";
  import { ChipVariant } from "$lib/components/ui/chip";
  import { DraftingCompassIcon, PlusIcon } from "lucide-svelte";

  let constraint: Constraint | undefined;
  let forOperand: ConstraintOperand | undefined = undefined;
  let popoverEnabled: boolean = true;
  let variant: ChipVariant = ChipVariant.default;
  let placeholder: string = "No constraint selected";
  let className: string = "";

  const assignedVariant: ChipVariant = ChipVariant.destructiveOutline;
  $: icon = {
    icon: getIcon(constraint, forOperand),
    color: undefined
  };

  // noinspection ReservedWordAsName
  export { constraint, forOperand, variant, popoverEnabled, placeholder, className as class };
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    {#if constraint === undefined}
      <Chip variant={variant} class={className}>
        <DraftingCompassIcon slot="icon" class="w-5 h-5" />
        <PlusIcon slot="hover_icon" class="w-5 h-5" />
      </Chip>
    {:else }
      <Chip variant={assignedVariant} class={className}>
        <Icon slot="icon" {icon} variant="monochrome" class="w-5 h-5" />
      </Chip>
    {/if}
  </Tooltip.Trigger>
  {#if popoverEnabled}
    <Tooltip.Content class="max-w-[250px] overflow-visible">
      {#if constraint}
        <ConstraintTooltip {constraint} {forOperand} />
      {:else }
        {placeholder}
      {/if}
    </Tooltip.Content>
  {/if}
</Tooltip.Root>