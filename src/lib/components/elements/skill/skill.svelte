<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Skill } from "$lib/types/core.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { GraduationCapIcon, PlusIcon } from "lucide-svelte";
  import Icon from "@iconify/svelte";
  import { capitalize } from "$lib/utils.js";

  let skill: Skill | undefined;
  let popoverEnabled: boolean = true;
  let className: string = "";
  let placeholder: string = "No skill selected";
  let variant: "default" | "destructive" = "default";

  // noinspection ReservedWordAsName
  export { skill, popoverEnabled, placeholder, className as class };
</script>

<Tooltip.Root>
  {#if skill === undefined}
    <Tooltip.Trigger class="w-6 h-6 {className}">
      <div
        class="group relative h-6 w-6 overflow-hidden rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:outline-accent-foreground bg-muted'}">
        <GraduationCapIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 group-hover:opacity-0 transition-all" />
        <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content>
        {placeholder}
      </Tooltip.Content>
    {/if}
  {:else}
    <Tooltip.Trigger class="w-6 h-6 {className}">
      <Icon icon={skill.icon}
            class="h-6 w-6 rounded-full outline-none hover:outline-accent-foreground transition-all" />
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content>
        {capitalize(skill.name)}
      </Tooltip.Content>
    {/if}
  {/if}
</Tooltip.Root>
