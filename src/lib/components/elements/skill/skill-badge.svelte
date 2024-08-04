<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Skill } from "$lib/types";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Chip from "$lib/components/ui/chip/chip.svelte";
  import Icon from "$lib/components/ui/icon/icon.svelte";
  import { ChipVariant } from "$lib/components/ui/chip";
  import { GraduationCapIcon, PlusIcon } from "lucide-svelte";
  import { capitalize } from "$lib/utils.js";

  let skill: Skill | undefined;
  let placeholder: string = "No skill selected";
  let variant: ChipVariant = ChipVariant.default;
  let popoverEnabled: boolean = true;
  let compact: boolean = true;
  let className: string = "";

  // noinspection ReservedWordAsName
  export { skill, variant, compact, popoverEnabled, placeholder, className as class };
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    {#if skill}
      {#if compact}
        <Chip variant={ChipVariant.colorOutline} color={skill.icon.color} class={className}>
          <Icon icon={skill.icon} slot="icon" variant="monochrome" class="w-5 h-5" />
        </Chip>
      {:else }
        <Chip variant={ChipVariant.colorSolid} color={skill.icon.color} class={className}>
          <Icon icon={skill.icon} slot="icon" variant="monochrome" class="w-5 h-5" />
          {capitalize(skill.name)}
        </Chip>
      {/if}
    {:else}
      {#if compact}
        <Chip class={className} {variant}>
          <GraduationCapIcon slot="icon" />
          <PlusIcon slot="hover_icon" />
        </Chip>
      {:else}
        <Chip class={className} {variant}>
          <GraduationCapIcon slot="icon" />
          <PlusIcon slot="hover_icon" />
          {capitalize(placeholder)}
        </Chip>
      {/if}
    {/if}
  </Tooltip.Trigger>
  {#if popoverEnabled}
    <Tooltip.Content class="max-w-[250px]">
      {#if skill}
        <h3>{capitalize(skill.name)}</h3>
        <p class="text-muted-foreground">{skill.description}</p>
      {:else}
        {placeholder}
      {/if}
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
