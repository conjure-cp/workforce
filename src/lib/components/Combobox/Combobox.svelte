<script lang="ts">
  // noinspection ES6UnusedImports
  import { Combobox } from "bits-ui";
  import Icon from "@iconify/svelte";
  import type { ComboboxItem } from "$lib/components/Combobox/types.ts";

  let items: ComboboxItem[];
  let inputValue = "";
  let touchedInput = false;
  let placeholder = "Search";

  $: filteredItems =
    inputValue && touchedInput
      ? items.filter((fruit) => fruit.value.includes(inputValue.toLowerCase()))
      : items;

  export { items, placeholder };
</script>

<Combobox.Root items={filteredItems} bind:inputValue bind:touchedInput>
  <div class="flex items-center rounded-md bg-white p-2 h-8 shadow">
    <Combobox.Input placeholder={placeholder} aria-label={placeholder} class="flex-grow outline-none" />
    <Icon icon="tabler:selector" class="text-gray-500" />
  </div>

  <Combobox.Content sideOffset={8} class="shadow rounded-md overflow-clip">
    {#each filteredItems as item (item.value)}
      <Combobox.Item value={item.value} label={item.label}
                     class="py-2 px-4 hover:bg-gray-100 cursor-pointer bg-white">
        {item.label}
        <Combobox.ItemIndicator asChild={false} class="text-green-500">
          <Icon icon="mdi:check" />
        </Combobox.ItemIndicator>
      </Combobox.Item>
    {:else}
      <span class="py-2 px-4 bg-white text-gray-500 shadow rounded-md">No results found</span>
    {/each}
  </Combobox.Content>
  <Combobox.HiddenInput name="selectedValue" />
</Combobox.Root>