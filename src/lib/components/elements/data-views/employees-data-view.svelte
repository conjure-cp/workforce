<script lang="ts">
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import EmployeesDataTable from "$lib/components/elements/data-tables/employees-data-table.svelte";

  import { FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import { type Person, Skill } from "$lib/types/core.ts";
  import { employees } from "$lib/stores.ts";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import type { AnyPlugins } from "svelte-headless-table/plugins";
  import ColumnHideSelector from "$lib/components/elements/data-views/lib/column-hide-selector.svelte";

  let data: ReadOrWritable<Person[]> = employees;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let flatColumns: FlatColumn<Person, AnyPlugins, string>[];
  let hideForId: { [key: string]: boolean } = {};
  let className: string = "";

  export { data, className as class };
</script>

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
  <EmployeesDataTable {data} bind:filterValue bind:sortKeys bind:hideForId bind:flatColumns class="w-full" />
</div>