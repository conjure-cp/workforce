<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Chip } from "$lib/components/chip";
  import { Icon } from "$lib/components/icon";
  import * as Popover from "$lib/components/ui/popover";
  import { Icon as TIcon } from "$lib/ui";
  import { ChevronDownIcon } from "lucide-svelte";
  import { tick } from "svelte";
  import { PFP_HEIGHT, PFP_WIDTH, type Size } from "$lib/components/profile";
  import IconPickerContent from "./icon-picker-content.svelte";

  export let icon: TIcon | undefined = undefined;
  export let size: Size = "sm";
  let className = "";
  let open = false;

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
  <Popover.Trigger asChild class={className} let:builder>
    <Button
      aria-expanded={open}
      builders={[builder]}
      class="aspect-square h-fit w-fit rounded-full p-0 outline-none"
      role="combobox"
      variant="ghost"
    >
      {#if icon === undefined}
        <Chip {size} variant="outline" class="h-fit w-fit p-1">
          <ChevronDownIcon slot="icon" class="{PFP_HEIGHT[size]} {PFP_WIDTH[size]}" />
        </Chip>
      {:else}
        <Chip {size} color={icon.color} variant="outline" class="h-fit w-fit p-1">
          <Icon {icon} slot="icon" class="{PFP_HEIGHT[size]} {PFP_WIDTH[size]}" color={null} />
        </Chip>
      {/if}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-80 p-1">
    <IconPickerContent bind:icon onClose={() => closeAndFocusTrigger(ids.trigger)} />
  </Popover.Content>
</Popover.Root>
