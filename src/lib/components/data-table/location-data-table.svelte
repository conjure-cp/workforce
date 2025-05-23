<!--
# Location Data Table

Data table for the Location data type.
See also: `$lib/model/core/location.ts`.

## Props:
- `data`: Svelte store of `Location[]` to be displayed in the table.
- `header`: If true, displays a map to visualise locations and a header with some controls.
- `state`: The global state containing the locations.
- `actions`: A map of `(<action name>, (item: Location) => void)`. By default, contains "Edit" (opens the edit dialog) and "Delete" (deletes the item).
- `mapClass`: Tailwind CSS class for the map.
- `class`: Extra Tailwind CSS classes to add to the table.
-->
<script lang="ts">
  import { EditDialog } from "$lib/components/edit-dialog";
  import { Map as MapComponent } from "$lib/components/map";
  import { ProfilePicture } from "$lib/components/profile";
  import { Search } from "$lib/components/search";
  import { Button } from "$lib/components/ui/button";
  import { state as GLOBAL_STATE, Location, State } from "$lib/model";
  import type { Geopoint } from "$lib/model/geocoding";
  import type { Display } from "$lib/ui";
  import { PlusIcon } from "lucide-svelte";
  import { createRender, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { get as _get, type Writable, writable } from "svelte/store";
  import PropertyValue from "../property/property-value.svelte";
  import { type ColumnInitializer, DataTableCore } from "./core";
  import { ColumnHideSelector, mkCapacity, TableHeader } from "./lib";
  import DeleteDialog from "./lib/delete-dialog.svelte";

  let data: ReadOrWritable<Location[]>;
  let header = true;
  let state: State = GLOBAL_STATE;
  let rowActions = new Map<string, (item: Location) => void>();
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: Record<string, boolean> = {};
  let flatColumns: FlatColumn<Location, any, string>[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  let className = "";
  let mapClass = "h-[300px] w-full";

  // Currently selected location
  let selected: Location | undefined = undefined;
  // Dialog controls
  let alertOpen = false;
  let dialogOpen = false;
  let dialogTitle = "Edit Location";

  // Column definitions
  let columnInitializers: ColumnInitializer<Location>[] = [
    {
      accessor: (row) => row as Display,
      cell: (cell) => createRender(ProfilePicture, { item: cell.value }),
      header: "Picture",
      id: "picture",
      plugins: { sort: { disable: true }, tableFilter: { disable: true } },
    },
    { accessor: (row: Location) => row.name, header: "Name", id: "name" },
    {
      accessor: (row: Location) =>
        row.point?.address.format(["street", "settlement", "country", "postcode"]) || "No Address",
      header: "Address",
      id: "address",
    },
    {
      accessor: (row: Location) => mkCapacity(row.min.people, row.max.people, "people"),
      header: "Capacity (People)",
      id: "capacity_people",
    },
    {
      accessor: (row: Location) => mkCapacity(row.min.tasks, row.max.tasks, "tasks"),
      header: "Capacity (Tasks)",
      id: "capacity_tasks",
    },
  ];

  // Add extra columns for user-defined properties
  for (const prop of _get(state.templates).location.keys) {
    columnInitializers.push({
      accessor: (row: Location) => row.properties.get(prop),
      cell: (cell) => createRender(PropertyValue, { property: prop, value: cell.value }),
      header: prop.name,
      id: prop.uuid,
    });
  }

  let actions = new Map([...rowActions, ["Edit", rowClick], ["Delete", rowDelete]]);

  function rowDelete(item: Location) {
    if (_get(state.settings).askDeleteConfirmation) {
      selected = item;
      alertOpen = true;
    } else {
      item.delete();
    }
  }

  function rowClick(item: Location) {
    dialogTitle = "Edit Location";
    selected = item.pull() as Location;
    dialogOpen = true;
  }

  function markerClick(item: Geopoint | Location) {
    if (item instanceof Location) {
      rowClick(item);
    }
  }

  function newLocation() {
    dialogTitle = "Create new Location";
    selected = new Location({ name: "" }, state);
    dialogOpen = true;
  }

  export { data, actions, header, state, mapClass, className as class };
</script>

<div class="flex flex-col items-start justify-start {className}">
  {#if header}
    <!-- Interactive map to show locations as points-->
    <MapComponent locations={$data} class="aspect-auto {mapClass}" onMarkerClick={markerClick} />
  {/if}
  <div class="mt-4 flex h-max w-full flex-col items-start justify-start overflow-y-scroll">
    <!-- Table header with controls -->
    {#if header}
      <TableHeader sticky={true}>
        <svelte:fragment slot="start">
          <Button
            class="text-muted-foreground hover:text-accent-foreground"
            on:click={newLocation}
            size="icon-xl"
            variant="ghost"
          >
            <PlusIcon />
          </Button>
          <slot name="start" />
        </svelte:fragment>

        <svelte:fragment slot="middle">
          <slot name="middle" />
        </svelte:fragment>

        <svelte:fragment slot="end">
          <ColumnHideSelector bind:hideForId {flatColumns} />
          <Search onInput={(s) => filterValue.set(s)} />
        </svelte:fragment>
      </TableHeader>
    {/if}
    <!-- Data table -->
    <DataTableCore
      bind:filterValue
      bind:flatColumns
      bind:hideForId
      bind:sortKeys
      class="w-full"
      {columnInitializers}
      {data}
      {actions}
      {header}
      defaultAction={rowClick}
    />
  </div>
</div>
<!-- Edit and Delete pop-ups (initially closed) -->
<EditDialog {selected} bind:open={dialogOpen} title={dialogTitle} />
<DeleteDialog {selected} bind:open={alertOpen} />
