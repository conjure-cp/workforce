<!--suppress ES6UnusedImports -->
<script lang="ts">
  import * as Popover from "$lib/components/ui/popover";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Button } from "$lib/components/ui/button";
  import { ChevronDownIcon, LoaderIcon } from "lucide-svelte";
  import { writable, type Writable } from "svelte/store";
  import { tick } from "svelte";
  import Icon from "$lib/components/ui/icon/icon.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import ColourPicker from "$lib/components/ui/color-picker/color-picker.svelte";
  import Chip from "$lib/components/ui/chip/chip.svelte";
  import type { IconType } from "$lib/types/ui.ts";
  import { Separator } from "$lib/components/ui/separator";
  import { capitalize, stripPrefix } from "$lib/utils.js";
  import { ChipVariant } from "$lib/components/ui/chip";

  const LIMIT: number = 64;
  const ICON_SET: string = "mdi";
  const DEFAULT_ICONS: string[] = [
    "mdi:account",
    "mdi:hospital",
    "mdi:home",
    "mdi:car",
    "mdi:food",
    "mdi:airplane",
    "mdi:briefcase",
    "mdi:camera",
    "mdi:book",
    "mdi:heart",
    "mdi:factory",
    "mdi:fire",
    "mdi:flower",
    "mdi:computer",
    "mdi:language",
    "mdi:dropbox",
    "mdi:code",
    "mdi:wrench",
    "mdi:shield",
    "mdi:lock",
    "mdi:lightbulb",
    "mdi:power-plug",
    "mdi:phone",
    "mdi:email",
    "mdi:map",
    "mdi:weather-sunny",
    "mdi:weather-night",
    "mdi:paw"
  ];

  let open: boolean = false;
  let className: string = "";
  let iconList: Writable<string[]> = writable(DEFAULT_ICONS);
  let icon: IconType | undefined = undefined;
  let loading: boolean = false;

  function onColourSelect(color: string) {
    icon = {
      icon: icon?.icon ?? "",
      color: color
    };
  }

  async function fetchIconList(query: string) {
    loading = true;
    try {
      const response = await fetch(`https://api.iconify.design/search?query=${query}&prefix=${ICON_SET}&limit=${LIMIT}`);
      const data = await response.json();
      iconList.set(data.icons);
    } catch (error) {
      console.error("Error fetching icon list", error);
      iconList.set([]);
    } finally {
      loading = false;
    }
  }

  async function onSearch(query: string) {
    if (query === "") {
      iconList.set(DEFAULT_ICONS);
      return;
    }

    await fetchIconList(query);
  }

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

  export { icon, className as class };
</script>


<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder class={className}>
    <Button
      builders={[builder]}
      variant="ghost"
      role="combobox"
      size="icon_lg"
      aria-expanded={open}
      class="w-fit h-fit rounded-full outline-none p-0"
    >
      {#if icon !== undefined}
        <Chip variant={ChipVariant.colorOutline} color={icon.color}>
          <Icon {icon} slot="icon" variant="monochrome" class="w-5 h-5" />
        </Chip>
      {:else}
        <Chip variant={ChipVariant.outline}>
          <ChevronDownIcon slot="icon" class="w-5 h-5" />
        </Chip>
      {/if}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[310px] p-0">
    <ColourPicker class="mt-4 mb-4 justify-center" color={icon?.color} onSelect={(c) => onColourSelect(c)} />

    <Separator orientation="horizontal" />

    <Search debounceDelay={200} onInput={onSearch} class="!shadow-none !border-none !rounded-none" />

    <Separator orientation="horizontal" />

    {#if loading}
      <div class="flex flex-row items-center justify-center w-full h-20">
        <LoaderIcon class="animate-spin" />
      </div>
    {:else if $iconList.length === 0}
      <div class="flex flex-row items-center justify-center w-full h-20 text-muted-foreground">
        No icons found
      </div>
    {:else}
      <div class="flex flex-row flex-wrap max-h-[300px] w-full overflow-y-scroll my-2">
        {#each $iconList as icon_name}
          <Tooltip.Root>
            <Tooltip.Trigger>
              <Button
                on:click={() => {
                  icon = {
                    icon: icon_name,
                    color: icon?.color
                  };
                  closeAndFocusTrigger(ids.trigger);
                }}
                variant="ghost"
                size="icon_lg"
              >
                <Icon icon={{
                    icon: icon_name,
                    color: icon?.color
                  }} class="text-primary transition-all" />
              </Button>
            </Tooltip.Trigger>
            <Tooltip.Content class="text-muted-foreground">
              {capitalize(stripPrefix(icon_name, "mdi:").replaceAll("-", " "))}
            </Tooltip.Content>
          </Tooltip.Root>
        {/each}
      </div>
    {/if}
  </Popover.Content>
</Popover.Root>
