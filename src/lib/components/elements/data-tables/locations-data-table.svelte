<script lang="ts">
  import type { Location } from "$lib/types";
  import { locations } from "$lib/stores.ts";
  import { createRender, DataBodyCell, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import LocationBadge from "$lib/components/elements/location/location-badge.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { capitalize } from "$lib/utils.ts";
  import ConstraintsList from "$lib/components/elements/constraint/constraints-list.svelte";
  import type { Constraint } from "$lib/types/constraints.ts";
  import type { AnyPlugins } from "svelte-headless-table/plugins";
  import type { ColumnInitializer } from "$lib/components/elements/data-tables/core";
  import { getConstraintsForLocation } from "$lib/types/location.ts";

  let data: ReadOrWritable<Location[]> = locations;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<Location, AnyPlugins, string>[];
  let className: string = "";

  const columnInitializers: ColumnInitializer[] = [
    {
      id: "image",
      accessor: (row: Location) => row,
      header: "Image",
      cell: (cell: DataBodyCell<unknown>) => createRender(LocationBadge, { location: cell.value as Location }),
      plugins: {
        tableFilter: {
          disable: true
        },
        sort: {
          disable: true
        }
      }
    },
    {
      id: "name",
      accessor: "name",
      header: "Name",
      cell: (cell: DataBodyCell<unknown>) => capitalize(cell.value as string)
    },
    {
      id: "address",
      accessor: "address",
      header: "Address"
    },
    {
      id: "constraints",
      accessor: (row: Location) => getConstraintsForLocation(row),
      header: "Constraints",
      cell: (cell: DataBodyCell<unknown>) => createRender(ConstraintsList, { constraints: cell.value as Constraint[] }),
      plugins: {
        tableFilter: {
          getFilterValue: (value: Constraint[]) => value.map((constraint) => constraint.type).join(" ")
        },
        sort: {
          getSortValue: (value: Constraint[]) => value.map((constraint) => constraint.type).join(" ")
        }
      }
    }
  ];

  export { data, filterValue, sortKeys, hideForId, flatColumns, className as class };
</script>

<DataTable {data} {columnInitializers} bind:filterValue bind:sortKeys bind:hideForId bind:flatColumns
           class={className} />
