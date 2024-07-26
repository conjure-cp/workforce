<script lang="ts">
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import LocationsDataTable from "$lib/components/elements/data-tables/locations-data-table.svelte";
  import { FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import { Location } from "$lib/types/core.ts";
  import { locations } from "$lib/stores.ts";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import LocationsMap from "$lib/components/elements/location/locations-map.svelte";
  import type { AnyPlugins } from "svelte-headless-table/plugins";
  import ColumnHideSelector from "$lib/components/elements/data-views/lib/column-hide-selector.svelte";

  let data: ReadOrWritable<Location[]> = locations;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let flatColumns: FlatColumn<any, AnyPlugins, string>[];
  let hideForId: { [key: string]: boolean } = {};
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
        <ColumnHideSelector {flatColumns} bind:hideForId />
        <Search onInput={(s) => filterValue.set(s)} />
      </svelte:fragment>
    </TopBar>
    <LocationsDataTable {data} bind:filterValue bind:sortKeys bind:flatColumns bind:hideForId class="w-full" />
  </div>
</div>