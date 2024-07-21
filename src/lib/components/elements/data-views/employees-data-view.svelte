<script lang="ts">
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import EmployeesDataTable from "$lib/components/elements/data-tables/employees-data-table.svelte";
  import type { ReadOrWritable } from "svelte-headless-table";
  import type { Person } from "$lib/types/core.ts";
  import { employees } from "$lib/stores.ts";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { Button } from "$lib/components/ui/button";

  let data: ReadOrWritable<Person[]> = employees;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);

  export { data };
</script>

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
<EmployeesDataTable {data} bind:filterValue bind:sortKeys class="w-full" />