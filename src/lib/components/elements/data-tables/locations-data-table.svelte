<script lang="ts">
  import { Location } from "$lib/types/core.ts";
  import { locations } from "$lib/stores.ts";
  import { createRender, createTable, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import LocationBadge from "$lib/components/elements/location/location-badge.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { capitalize } from "$lib/utils.ts";
  import ConstraintsList from "$lib/components/elements/constraint/constraints-list.svelte";
  import type { Constraint } from "$lib/types/constraints.ts";
  import type { AnyPlugins } from "svelte-headless-table/dist/plugins";

  let data: ReadOrWritable<Location[]> = locations;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<any, AnyPlugins, string>[];
  let className: string = "";

  const table = createTable(data);
  const columns = table.createColumns([
    table.column({
      id: "image",
      accessor: (row: Location) => row,
      header: "Image",
      cell: (data) => createRender(LocationBadge, { location: data.value }),
      plugins: {
        filter: {
          disable: true
        },
        sort: {
          disable: true
        }
      }
    }),
    table.column({
      id: "name",
      accessor: "name",
      header: "Name",
      cell: ({ value }) => capitalize(value)
    }),
    table.column({
      id: "address",
      accessor: "address",
      header: "Address"
    }),
    table.column({
      id: "constraints",
      accessor: (row: Location) => row.constraints,
      header: "Constraints",
      cell: (data) => createRender(ConstraintsList, { constraints: data.value }),
      plugins: {
        filter: {
          getFilterValue: (value: Constraint[]) => value.map((constraint) => constraint.type).join(" ")
        },
        sort: {
          getSortValue: (value: Constraint[]) => value.map((constraint) => constraint.type).join(" ")
        }
      }
    })
  ]);

  export { data, filterValue, sortKeys, hideForId, flatColumns, className as class };
</script>

<DataTable {data} {columns} bind:filterValue bind:sortKeys bind:hideForId bind:flatColumns class={className} />
