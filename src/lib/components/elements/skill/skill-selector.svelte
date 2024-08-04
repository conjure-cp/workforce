<!--suppress ES6UnusedImports -->
<script lang="ts">
  import Check from "lucide-svelte/icons/check";
  import * as Command from "$lib/components/ui/command";
  import * as Popover from "$lib/components/ui/popover";
  import { Button } from "$lib/components/ui/button";
  import SkillBadge from "$lib/components/elements/skill/skill-badge.svelte";
  import { capitalize, cn } from "$lib/utils.js";
  import { tick } from "svelte";
  import { skills } from "$lib/stores.ts";
  import type { Skill } from "$lib/types";
  import { ChipVariant } from "$lib/components/ui/chip";

  type Filter = (s: Skill | undefined) => boolean;
  type OnChange = (old_value: Skill | undefined, new_value: Skill | undefined) => Skill | undefined;

  let skill: Skill | undefined = undefined;
  let options: Skill[] = $skills;
  let variant: ChipVariant = ChipVariant.default;
  let placeholder: string = "Choose a skill";
  let compact: boolean = true;
  let open: boolean = false;
  let className: string = "";

  let filter: Filter = () => true;
  let onChange: OnChange = (_, new_value) => new_value;

  $: filtered_options = options.filter(filter);

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

  // noinspection ReservedWordAsName
  export { skill, variant, compact, placeholder, options, filter, onChange, className as class };
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder class={className}>
    <Button
      builders={[builder]}
      variant="ghost"
      role="combobox"
      aria-expanded={open}
      class="w-fit h-fit !p-0 rounded-full overflow-visible"
    >
      <SkillBadge {skill} {variant} {placeholder} {compact} />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[200px] p-0">
    <Command.Root>
      <Command.Input placeholder="Search" />
      <Command.Empty>No skills found</Command.Empty>
      <Command.Group class="max-h-[250px] overflow-y-scroll">
        {#each filtered_options as option}
          <Command.Item
            value="{option.name};{option.uuid}"
            onSelect={() => {
              skill = onChange(skill, option);
              closeAndFocusTrigger(ids.trigger);
            }}
            class="flex flex-row items-center justify-start gap-2"
          >
            <SkillBadge skill={option} compact={true} />
            {capitalize(option.name)}
            <Check
              class={cn(
                "ml-auto h-6 w-6",
                skill?.uuid !== option.uuid && "text-transparent"
              )}
            />
          </Command.Item>
        {/each}
        <Command.Item
          value="unassigned"
          onSelect={() => {
              skill = onChange(skill, undefined);
              closeAndFocusTrigger(ids.trigger);
            }}
          class="flex flex-row items-center justify-start gap-2"
        >
          <SkillBadge skill={undefined} popoverEnabled={false} />
          Unassigned
          <Check
            class={cn(
                "ml-auto h-6 w-6",
                skill !== undefined && "text-transparent"
              )}
          />
        </Command.Item>
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
