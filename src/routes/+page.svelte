<script lang="ts">
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import TopBar from "$lib/components/ui/top-bar/top_bar.svelte";
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import { FilterIcon } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import { Separator } from "$lib/components/ui/separator";

  let values: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];
</script>


<main class="w-full h-full flex flex-col items-start justify-start overflow-y-scroll">
  <TopBar sticky={true}>
    <svelte:fragment slot="start">
      <Combobox items={values} placeholder="Select schedule" icon="mdi:calendar" />
    </svelte:fragment>

    <svelte:fragment slot="end">
      <Button size="icon_xl" variant="ghost" on:click={() => {}}>
        <FilterIcon />
      </Button>
      <Search />
    </svelte:fragment>
  </TopBar>

  <div class="w-full flex flex-row items-start justify-around">
    <div class="w-full h-[500px] flex flex-col bg-green-200">

    </div>
    <Separator orientation="vertical" />
    <div class="w-full h-[2000px] flex flex-col bg-yellow-200">

    </div>
    <Separator orientation="vertical" />
    <div class="w-full h-[400px] flex flex-col bg-red-200">

    </div>
  </div>
</main>