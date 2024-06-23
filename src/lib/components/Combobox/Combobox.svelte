<script lang="ts">
  // noinspection ES6UnusedImports
  import { Combobox } from "bits-ui";
  import Icon from "@iconify/svelte";

  const fruits = [
    { value: "mango", label: "Mango" },
    { value: "watermelon", label: "Watermelon" },
    { value: "apple", label: "Apple" },
    { value: "pineapple", label: "Pineapple" },
    { value: "orange", label: "Orange" }
  ];

  let inputValue = "";
  let touchedInput = false;

  $: filteredFruits =
    inputValue && touchedInput
      ? fruits.filter((fruit) => fruit.value.includes(inputValue.toLowerCase()))
      : fruits;
</script>

<Combobox.Root items={filteredFruits} bind:inputValue bind:touchedInput>
  <div class="relative">
    <Combobox.Input
      class="inline-flex h-input w-[296px] truncate rounded-9px border border-border-input bg-background px-11 text-sm transition-colors placeholder:text-foreground-alt/50 focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
      placeholder="Search a fruit"
      aria-label="Search a fruit"
    />
    <Icon class="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground" icon="tabler:selector" />
  </div>

  <Combobox.Content
    class="w-full rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none"
    sideOffset={8}
  >
    {#each filteredFruits as fruit (fruit.value)}
      <Combobox.Item
        class="flex h-10 w-full select-none items-center rounded-button py-3 pl-5 pr-1.5 text-sm capitalize outline-none transition-all duration-75 data-[highlighted]:bg-muted"
        value={fruit.value}
        label={fruit.label}
      >
        {fruit.label}
        <Combobox.ItemIndicator class="ml-auto" asChild={false}>
          <Icon icon="mdi:check" />
        </Combobox.ItemIndicator>
      </Combobox.Item>
    {:else}
      <span class="block px-5 py-2 text-sm text-muted-foreground">
        No results found
      </span>
    {/each}
  </Combobox.Content>
  <Combobox.HiddenInput name="favoriteFruit" />
</Combobox.Root>