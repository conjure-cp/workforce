<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Skill } from "$lib/types/core.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { GraduationCapIcon, PlusIcon } from "lucide-svelte";
  import Icon from "$lib/components/ui/icon/icon.svelte";
  import { capitalize, getTextColour } from "$lib/utils.js";

  let skill: Skill | undefined;
  let popoverEnabled: boolean = true;
  let className: string = "";
  let placeholder: string = "No skill selected";
  let variant: "default" | "destructive" = "default";
  let icon_variant: "default" | "placeholder" | "plus" = "default";
  let compact: boolean = true;
  let monochrome: boolean = false;

  $: color_hex = skill?.icon.color ? skill.icon.color.hex() : "";
  $: text_color_hex = skill?.icon.color ? getTextColour(skill.icon.color).hex() : "";

  // noinspection ReservedWordAsName
  export { skill, variant, icon_variant, compact, monochrome, popoverEnabled, placeholder, className as class };
</script>

<Tooltip.Root>
  {#if skill === undefined}
    <Tooltip.Trigger class="w-fit {className}">
      {#if compact}
        <div
          class="group/skill relative h-6 w-6 overflow-hidden rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">
          {#if icon_variant === "default"}
            <GraduationCapIcon
              class="absolute top-0 left-0 h-6 w-6 opacity-100 group-hover/skill:opacity-0 transition-all" />
            <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-0 group-hover/skill:opacity-100 transition-all" />
          {:else if icon_variant === "placeholder"}
            <GraduationCapIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 transition-all" />
          {:else if icon_variant === "plus"}
            <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 transition-all" />
          {/if}
        </div>
      {:else}
        <div
          class="group/skill h-fit w-max flex flex-row items-center justify-start gap-2 pr-3 px-2 py-1 rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">
          <div class="relative h-5 w-5 overflow-hidden rounded-full">
            {#if icon_variant === "default"}
              <GraduationCapIcon
                class="absolute top-0 left-0 h-5 w-5 opacity-100 group-hover/skill:opacity-0 transition-all" />
              <PlusIcon class="absolute top-0 left-0 h-5 w-5 opacity-0 group-hover/skill:opacity-100 transition-all" />
            {:else if icon_variant === "placeholder"}
              <GraduationCapIcon class="absolute top-0 left-0 h-5 w-5 opacity-100 transition-all" />
            {:else if icon_variant === "plus"}
              <PlusIcon class="absolute top-0 left-0 h-5 w-5 opacity-100 transition-all" />
            {/if}
          </div>
          {capitalize(placeholder)}
        </div>
      {/if}
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content>
        {placeholder}
      </Tooltip.Content>
    {/if}
  {:else}
    <Tooltip.Trigger class="w-fit {className}">
      {#if compact}
        <Icon icon={skill.icon} variant={monochrome ? "monochrome" : "color"}
              class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all {monochrome && 'bg-accent text-accent-foreground'}" />
      {:else}
        <div
          class="flex flex-row items-center justify-start w-max h-fit gap-2 pr-3 px-2 py-1 rounded-full outline-none outline-offset-0 transition-all hover:outline-accent-foreground {monochrome && 'bg-accent text-accent-foreground'}"
          style={(skill.icon.color && !monochrome) ? `background-color: ${color_hex}; color: ${text_color_hex}` : ""}>
          <Icon icon={skill.icon} variant="monochrome"
                class="h-5 w-5 rounded-full bg-transparent opacity-70" />
          {capitalize(skill.name)}
        </div>
      {/if}
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content class="max-w-[200px]">
        <h3 class="font-semibold">{capitalize(skill.name)}</h3>
        <p class="text-muted-foreground">{skill.description}</p>
      </Tooltip.Content>
    {/if}
  {/if}
</Tooltip.Root>
