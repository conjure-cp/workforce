<script lang="ts">
  // noinspection ES6UnusedImports
  import { Combobox } from "bits-ui";
  import Icon, { type IconifyIcon } from "@iconify/svelte";
  import type { ComboboxItem } from "$lib/components/ui/combobox/index.ts";

  let items: ComboboxItem[];
  let inputValue = "";
  let touchedInput = false;
  let placeholder = "Search";
  let icon: string | IconifyIcon | undefined = undefined;
  let open: boolean = false;

  $: filteredItems =
    inputValue && touchedInput
      ? items.filter((fruit) => fruit.value.includes(inputValue.toLowerCase()))
      : items;

  export { items, placeholder, icon };
</script>

<Combobox.Root items={filteredItems} open={open} onOpenChange={() => {open = !open}} bind:inputValue bind:touchedInput>
  <div class="relative">
    {#if icon !== undefined}
      <Icon
        icon={icon}
        class="absolute start-3 top-1/2 -translate-y-1/2 text-2xl {open ? 'text-accent-foreground' : 'text-secondary-foreground'} transition-colors duration-200"
      />
    {/if}
    <Combobox.Input
      class="inline-flex truncate h-10 {icon ? 'pl-12' : 'pl-4'} rounded-md border bg-background transition-colors duration-200 shadow"
      placeholder={placeholder}
      aria-label={placeholder}
    />
    <Icon
      icon="mdi:chevron-up-down"
      class="absolute end-3 top-1/2 -translate-y-1/2 text-2xl {open ? 'text-accent-foreground' : 'text-secondary-foreground'} transition-colors duration-200"
    />
  </div>

  <Combobox.Content
    class="w-full rounded-xl border border-muted bg-background shadow-popover outline-none overflow-clip"
    sideOffset={8}
  >
    {#each filteredItems as item (item.value)}
      <Combobox.Item
        class="flex h-10 w-full select-none items-center hover:bg-gray-300 py-3 pl-5 pr-1.5 capitalize outline-none transition-all"
        value={item.value}
        label={item.label}
      >
        {item.label}
        <Combobox.ItemIndicator class="ml-auto" asChild={false}>
          <Icon
            icon="mdi:check"
          />
        </Combobox.ItemIndicator>
      </Combobox.Item>
    {:else}
      <span class="block px-5 py-2 text-sm text-muted-foreground">
        No results found
      </span>
    {/each}
  </Combobox.Content>
  <Combobox.HiddenInput name="selectedItem" />
</Combobox.Root>