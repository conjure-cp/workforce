<script lang="ts">
  import type { ComboboxItem } from "$lib/components/Combobox/types.ts";
  import Combobox from "$lib/components/Combobox/Combobox.svelte";
  import Button from "$lib/components/Button.svelte";
  import Search from "$lib/components/Search.svelte";

  let values: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];
</script>

<div class="w-full flex justify-between items-center bg-gray-200 p-4">
  <Combobox icon="mdi:calendar" items={values} />
  <div class="flex flex-row items-center gap-4">
    <Button
      action={() => {}}
      icon="mdi:filter"
    />
    <Search />
  </div>
</div>