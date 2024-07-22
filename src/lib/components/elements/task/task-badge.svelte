<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Task } from "$lib/types/core.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { ClipboardIcon, PlusIcon } from "lucide-svelte";
  import Icon from "$lib/components/ui/icon/icon.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import { capitalize, getTextColour } from "$lib/utils.js";

  let task: Task | undefined;
  let popoverEnabled: boolean = true;
  let className: string = "";
  let placeholder: string = "No task selected";
  let variant: "default" | "destructive" = "default";
  let icon_variant: "default" | "placeholder" | "plus" = "default";
  let compact: boolean = true;

  $: color_hex = task?.icon.color ? task.icon.color.hex() : "";
  $: text_color_hex = task?.icon.color ? getTextColour(task.icon.color).hex() : "";

  // noinspection ReservedWordAsName
  export { task, variant, icon_variant, compact, popoverEnabled, placeholder, className as class };
</script>

<Tooltip.Root>
  {#if task === undefined}
    <Tooltip.Trigger class="w-fit {className}">
      {#if compact}
        <div
          class="group/skill relative h-6 w-6 overflow-hidden rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">
          {#if icon_variant === "default"}
            <ClipboardIcon
              class="absolute top-0 left-0 h-6 w-6 opacity-100 group-hover/skill:opacity-0 transition-all" />
            <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-0 group-hover/skill:opacity-100 transition-all" />
          {:else if icon_variant === "placeholder"}
            <ClipboardIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 transition-all" />
          {:else if icon_variant === "plus"}
            <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 transition-all" />
          {/if}
        </div>
      {:else}
        <div
          class="group/skill h-fit w-max flex flex-row items-center justify-start gap-2 pr-3 px-2 py-1 rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">
          <div class="relative h-5 w-5 overflow-hidden rounded-full">
            {#if icon_variant === "default"}
              <ClipboardIcon
                class="absolute top-0 left-0 h-5 w-5 opacity-100 group-hover/skill:opacity-0 transition-all" />
              <PlusIcon class="absolute top-0 left-0 h-5 w-5 opacity-0 group-hover/skill:opacity-100 transition-all" />
            {:else if icon_variant === "placeholder"}
              <ClipboardIcon class="absolute top-0 left-0 h-5 w-5 opacity-100 transition-all" />
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
        <Icon icon={task.icon}
              class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else}
        <div
          class="flex flex-row items-center justify-start w-max h-fit gap-2 pr-3 px-2 py-1 rounded-full outline-none outline-offset-0 transition-all hover:outline-accent-foreground"
          style={task.icon.color ? `background-color: ${color_hex}; color: ${text_color_hex}` : ""}>
          <Icon icon={task.icon} variant="monochrome"
                class="h-5 w-5 rounded-full bg-transparent" />
          {capitalize(task.name)}
        </div>
      {/if}
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content class="max-w-[250px] overflow-visible">
        <h3 class="font-semibold mb-1">{capitalize(task.name)}</h3>
        <p class="text-muted-foreground">{task.description}</p>
        <h4 class="text-sm mt-2 mb-1">Required skills:</h4>
        <SkillsList skills={task.required_skills} compact={true} />
      </Tooltip.Content>
    {/if}
  {/if}
</Tooltip.Root>
