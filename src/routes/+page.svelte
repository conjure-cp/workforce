<script lang="ts">
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import { FilterIcon } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";

  let values: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];
</script>

<div class="w-full flex justify-between items-center bg-muted p-4">
  <Combobox icon="mdi:calendar" items={values} />
  <div class="flex flex-row items-center gap-4">
    <Button size="icon_lg" on:click={() => {}}>
      <FilterIcon />
    </Button>
    <Search />
  </div>
</div>