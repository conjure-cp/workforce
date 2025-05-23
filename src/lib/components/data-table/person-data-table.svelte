<!--
# Person Data Table

Data table for the Person data type.
See also: `$lib/model/core/person.ts`.

## Props:
- `data`: Svelte store of `Person[]` to be displayed in the table.
- `showHeader`: If true, displays a header with some controls.
- `state`: The global state containing the objects.
- `rowActions`: A map of EXTRA actions `(<action name>, (item: Person) => void)` on top of the default "Edit" and "Delete".

TODO: Actions API should be made consistent with e.g. the `LocationDataTable` component.
-->
<script lang="ts">
  import { EditDialog } from "$lib/components/edit-dialog";
  import { ProfilePicture } from "$lib/components/profile";
  import { Search } from "$lib/components/search";
  import { Button } from "$lib/components/ui/button";
  import { state as GLOBAL_STATE, Person, State } from "$lib/model";
  import type { Display } from "$lib/ui";
  import { getLocalTimeZone } from "@internationalized/date";
  import { PlusIcon } from "lucide-svelte";
  import { createRender, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { get as _get, type Writable, writable } from "svelte/store";
  import PropertyValue from "../property/property-value.svelte";
  import { type ColumnInitializer, DataTableCore } from "./core";
  import { ColumnHideSelector, TableHeader } from "./lib";
  import DeleteDialog from "./lib/delete-dialog.svelte";

  export let data: ReadOrWritable<Person[]>;
  export let showHeader = true;
  export let state: State = GLOBAL_STATE;
  export let rowActions = new Map<string, (item: Person) => void>();
  export let filterValue: Writable<string> = writable("");
  export let sortKeys: WritableSortKeys = createSortKeysStore([]);
  export let hideForId: Record<string, boolean> = {};

  let flatColumns: FlatColumn<Person, any, string>[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  let className = "";
  // Dialog state / controls
  let selected: Person | undefined = undefined;
  let alertOpen = false;
  let dialogOpen = false;
  let dialogTitle = "Edit Person";
  // Define format for date of birth
  const dobFormatter = new Intl.DateTimeFormat(navigator.language || "en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Column definitions
  let columnInitializers: ColumnInitializer<Person>[] = [
    {
      accessor: (row) => row as Display,
      cell: (cell) => createRender(ProfilePicture, { item: cell.value }),
      header: "Avatar",
      id: "avatar",
      plugins: { sort: { disable: true }, tableFilter: { disable: true } },
    },
    { accessor: (row: Person) => row.name, header: "Name", id: "name" },
    {
      accessor: (row: Person) =>
        row.dob ? dobFormatter.format(row.dob.toDate(getLocalTimeZone())) : "Not Set",
      header: "Date of Birth",
      id: "dob",
    },
  ];

  // Add columns for dynamic user-defined properties
  for (const prop of _get(state.templates).person.keys) {
    columnInitializers.push({
      accessor: (row: Person) => row.properties.get(prop),
      cell: (cell) => createRender(PropertyValue, { property: prop, value: cell.value }),
      header: prop.name,
      id: prop.uuid,
    });
  }

  // Row actions
  let actions = new Map([...rowActions, ["Edit", rowClick], ["Delete", rowDelete]]);

  function rowDelete(item: Person) {
    if (_get(state.settings).askDeleteConfirmation) {
      selected = item;
      alertOpen = true;
    } else {
      item.delete();
    }
  }

  function rowClick(item: Person) {
    dialogTitle = "Edit Person";
    selected = item.pull() as Person;
    dialogOpen = true;
  }

  function newPerson() {
    dialogTitle = "Create new Person";
    selected = new Person({ name: "" }, state);
    dialogOpen = true;
  }

  export { className as class };
</script>

<div class="flex flex-col items-start justify-start {className}">
  {#if showHeader}
    <slot name="header">
      <TableHeader sticky={true}>
        <svelte:fragment slot="start">
          <Button
            class="text-muted-foreground hover:text-accent-foreground"
            on:click={newPerson}
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
    </slot>
  {/if}
  <DataTableCore
    bind:filterValue
    bind:flatColumns
    bind:hideForId
    bind:sortKeys
    class="w-full"
    {columnInitializers}
    {data}
    {actions}
    header={showHeader}
    defaultAction={rowClick}
  />
</div>
<EditDialog {selected} bind:open={dialogOpen} title={dialogTitle} />
<DeleteDialog {selected} bind:open={alertOpen} />
