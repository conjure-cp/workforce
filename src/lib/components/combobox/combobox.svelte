<!--
# Generic Combobox Component

This is a generic combobox (i.e. Select with a built-in search) that is used to pick ONE item from a list.
The items can be any type, but to make it work you must supply your own functions to:
- Provide a human-friendly name (and, optionally, a picture, icon, and/or description tooltip) for each item. (`display`)
- Generate a unique ID for each item (can be any string, as long as it is unique and consistent). (`getId`)

By default, the item ID is used to compare items (needed to mark the currently selected item with a checkmark).
You can override `eq` with your own implementation. Idk why you would want to do that, but the option is there.

## Props:
- `options` (required): The list of items to choose from. Can be any type T.
- `display` (required): A function that takes an option (`T` or `undefined`) and returns a `Display` object.
- `getId` (required): A function that takes an option (`T`) and returns a string ID for that option.
- `eq`: A function that takes two options (`T` or `undefined`) and returns true if they are equal. Default: calls `getId` on both and compares the results.
- `value`: The currently selected item. Must be type `T` or `undefined` (meaning no item is selected). Bindable; Defaults to `undefined` (no item selected).
- `open`: Whether the combobox is open or closed. Bindable; Defaults to `false` (closed).
- `onChange`: A callback that fires when the selected item changes. Takes the old and new values as arguments. Defaults to a no-op.
- `onSelect`: A callback that fires when the user selects an item. Takes the new value as an argument. Defaults to a no-op.
- `allowUnselect`: If true, the user can unselect the currently selected item (i.e. set it to `undefined`). Defaults to true.
- `closeOnSelect`: If true, the combobox will close when the user selects an item. Defaults to true.
- `placeholder`: A string to show when no item is selected. Defaults to "Select an item".
- `class`: A string of additional Tailwind CSS classes to add to the top-level div.

See also:
- $lib/ui/Display - the Display interface definition
-->
<!--suppress ES6UnusedImports -->
<script lang="ts" generics="T">
  import { Button } from "$lib/components/ui/button";
  import * as Command from "$lib/components/ui/command";
  import Profile from "$lib/components/profile/profile.svelte";
  import * as Popover from "$lib/components/ui/popover";
  import { Icon, type Display } from "$lib/ui";
  import { cn } from "$lib/utils/ui";
  import Check from "lucide-svelte/icons/check";
  import ChevronDownIcon from "lucide-svelte/icons/chevron-down";
  import { tick } from "svelte";

  export let display: (val: T | undefined) => Display | undefined;
  export let getId: (val: T) => string;
  export let eq: (a: T | undefined, b: T | undefined) => boolean = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    return getId(a) === getId(b);
  };
  export let onChange: (aOld: T | undefined, aNew: T | undefined) => void = () => {};
  export let onSelect: (val: T | undefined) => void = () => {};
  export let open = false;
  export let allowUnselect = true;
  export let closeOnSelect = true;
  export let value: T | undefined = undefined;
  export let placeholder = "Select an item";
  export let options: T[] = [];
  let className = "";

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

  export { className as class };
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="outline"
      role="combobox"
      aria-expanded={open}
      class="justify-between p-2 {className}"
    >
      <Profile
        item={display(value)}
        variant="full"
        hoverEffects={false}
        showTooltip={false}
        {placeholder}
      />
      <ChevronDownIcon
        class="mr-1.5 text-muted-foreground transition-all group-hover/selector:text-foreground {open
          ? 'rotate-180'
          : ''}"
      />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="overflow-visible p-2">
    <Command.Root class="overflow-visible">
      <Command.Input placeholder="Search" />
      <Command.Empty>No options found</Command.Empty>
      <Command.Group class="overflow-visible">
        {#if allowUnselect}
          <Command.Item
            class="overflow-visible"
            value={undefined}
            onSelect={() => {
              onChange(value, undefined);
              onSelect(undefined);
              value = undefined;
              if (closeOnSelect) {
                closeAndFocusTrigger(ids.trigger);
              }
            }}
          >
            <Profile
              class="gap-3"
              emptyIcon={Icon.fromString("lucide:x")}
              {placeholder}
              item={display(undefined)}
              variant="full"
              hoverEffects={false}
              showTooltip={false}
            />
            <Check class={cn("ml-auto h-5 w-5", !eq(value, undefined) && "text-transparent")} />
          </Command.Item>
        {/if}
        {#each options as option}
          <Command.Item
            class="overflow-visible"
            value={getId(option)}
            onSelect={() => {
              onChange(value, option);
              onSelect(option);
              value = option;
              if (closeOnSelect) {
                closeAndFocusTrigger(ids.trigger);
              }
            }}
          >
            <Profile
              class="gap-3"
              item={display(option)}
              variant="full"
              hoverEffects={false}
              showTooltip={false}
            />
            <Check class={cn("ml-auto h-5 w-5", !eq(value, option) && "text-transparent")} />
          </Command.Item>
        {/each}
      </Command.Group>
    </Command.Root>
    <slot name="footer" />
  </Popover.Content>
</Popover.Root>
