<script lang="ts" generics="T extends HasUUID & Display">
  import { type HasUUID } from "$lib/utils/misc";
  import * as Command from "$lib/components/ui/command";
  import * as Popover from "$lib/components/ui/popover";
  import { Icon, type Display } from "$lib/ui";
  import { tick } from "svelte";
  import { type Size } from "$lib/components/profile";
  import { CLEAR, PLACEHOLDER, type OptionsCmp, type OptionsFilter } from "./misc";
  import SelectorEntry from "./selector-entry.svelte";

  export let open = false;
  export let options: T[] = [];
  export let size: Size = "md";
  export let placeholderIcon: Icon = PLACEHOLDER;
  export let clearIcon: Icon = CLEAR;
  export let allowUnselect = true;
  export let optionsCmp: OptionsCmp<T> = () => 0;
  export let optionsFilter: OptionsFilter<T> = () => true;
  export let onSelect: (value: T | undefined) => void = () => {};
  export let isChecked: (value: T | undefined) => boolean;
  export let className = "";
  export let closeOnSelect = true;

  $: _options = options.filter(optionsFilter).sort(optionsCmp);

  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
</script>

<Popover.Root bind:open let:ids>
  <slot />
  <Popover.Content class="w-[250px] p-0 {className}">
    <Command.Root>
      <Command.Input placeholder="Search" />
      <Command.Empty>No items found</Command.Empty>
      <Command.Group class="max-h-[250px] overflow-y-scroll">
        {#each _options as option}
          <SelectorEntry
            {...{
              option,
              size,
              placeholderIcon,
              isChecked,
              onSelect: () => {
                onSelect(option);
                if (closeOnSelect) {
                  closeAndFocusTrigger(ids.trigger);
                }
              },
            }}
          />
        {/each}
        {#if allowUnselect}
          <SelectorEntry
            {...{
              option: undefined,
              size,
              placeholderIcon: clearIcon,
              isChecked,
              onSelect: () => {
                onSelect(undefined);
                closeAndFocusTrigger(ids.trigger);
              },
            }}
          />
        {/if}
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
