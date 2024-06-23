<script lang="ts">
  import type { ComboboxItem } from "$lib/components/Combobox/types.ts";
  import Combobox from "$lib/components/Combobox/Combobox.svelte";

  let values: ComboboxItem[] = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" }
  ];
</script>

<div class="w-full flex justify-between items-center bg-gray-200 p-4">
  <Combobox items={values} />
</div>