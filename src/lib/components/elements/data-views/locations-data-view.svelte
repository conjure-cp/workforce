<script lang="ts">
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import LocationsDataTable from "$lib/components/elements/data-tables/locations-data-table.svelte";
  import type { ReadOrWritable } from "svelte-headless-table";
  import { Location } from "$lib/types/core.ts";
  import { locations } from "$lib/stores.ts";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import LocationsMap from "$lib/components/elements/location/locations-map.svelte";

  let data: ReadOrWritable<Location[]> = locations;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let className: string = "";

  export { data, className as class };
</script>

<div class="w-full h-full flex flex-col items-start justify-start gap-6">
  <LocationsMap class="w-full h-[600px]" />
  <div class="h-full w-full flex flex-col items-start justify-start overflow-y-scroll {className}">
    <TopBar sticky={true}>
      <svelte:fragment slot="start">
        <slot name="start" />
      </svelte:fragment>

      <svelte:fragment slot="middle">
        <slot name="middle" />
      </svelte:fragment>

      <svelte:fragment slot="end">
        <Search onInput={(s) => filterValue.set(s)} />
      </svelte:fragment>
    </TopBar>
    <LocationsDataTable {data} bind:filterValue bind:sortKeys class="w-full" />
  </div>
</div>