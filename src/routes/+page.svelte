<script lang="ts">
  import type { ComboboxItem } from "$lib/components/Combobox/types.ts";
  import Combobox from "$lib/components/Combobox/Combobox.svelte";
  import Icon from "@iconify/svelte";

  let values: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];
</script>

<div class="w-full flex justify-between items-center bg-gray-200 p-4">
  <Combobox items={values} />
  <div class="flex flex-row items-center">
    <button class="p-1 rounded hover:bg-gray-200 focus:outline-none">
      <Icon icon="mdi:filter" width="24px" height="24px" />
    </button>
  </div>
</div>