<!--suppress ES6UnusedImports -->
<script lang="ts">
  import Check from "lucide-svelte/icons/check";
  import ChevronsUpDown from "lucide-svelte/icons/chevrons-up-down";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import { tick } from "svelte";
  import type { ComboboxItem } from "$lib/components/ui/combobox/index.ts";
  import Icon from "$lib/components/ui/icon/icon.svelte";
  import type { IconType } from "$lib/types/ui.ts";

  let options: ComboboxItem[] = [];
  let open = false;
  let value = "";
  let icon: IconType;
  let placeholder = "Select a value";

  $: selectedValue =
    options.find((f) => f.value === value)?.label ??
    placeholder;

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

  export { placeholder, options, icon, value };
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="w-[250px] justify-start"
    >
      {#if icon}
        <Icon icon={icon} class="h-full w-auto opacity-50 mr-2" />
      {/if}
      {selectedValue}
      <ChevronsUpDown class="ml-auto h-5 w-5 shrink-0 opacity-50" />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[250px] p-0">
    <Command.Root>
      <Command.Input placeholder="Search" />
      <Command.Empty>No options found</Command.Empty>
      <Command.Group>
        {#each options as option}
          <Command.Item
            value={option.value}
            onSelect={(currentValue) => {
              value = currentValue;
              closeAndFocusTrigger(ids.trigger);
            }}
          >
            {option.label}
            <Check
              class={cn(
                "ml-auto h-5 w-5",
                value !== option.value && "text-transparent"
              )}
            />
          </Command.Item>
        {/each}
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>