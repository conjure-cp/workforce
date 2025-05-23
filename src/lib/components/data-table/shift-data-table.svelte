<!--
# Shift Data Table

Data table for the Shift data type.
See also: `$lib/model/core/shift.ts`.

## Props:
- `data`: Svelte store of `Shift[]` to be displayed in the table.
- `showHeader`: If true, displays a header with some controls.
- `state`: The global state containing the objects.
- `actions`: A map of `(<action name>, (item: Shift) => void)`. By default, contains "Edit" (opens the edit dialog) and "Delete" (deletes the item).
-->

<script lang="ts">
  import { state as GLOBAL_STATE, Shift, State, Task } from "$lib/model";
  import type { Display } from "$lib/ui";
  import { capitalize } from "$lib/utils/misc";
  import { Time } from "@internationalized/date";
  import { PlusIcon } from "lucide-svelte";
  import { createRender, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { type Writable, writable } from "svelte/store";
  import { Button } from "$lib/components/ui/button";
  import { EditDialog } from "$lib/components/edit-dialog";
  import { ProfilePicture, ProfilesList } from "$lib/components/profile";
  import { Search } from "$lib/components/search";
  import { type ColumnInitializer, DataTableCore } from "./core";
  import { ColumnHideSelector, TableHeader } from "./lib";
  import { get as _get } from "svelte/store";
  import DeleteDialog from "./lib/delete-dialog.svelte";
  import { formattedDuration } from "$lib/model/temporal/utils";

  let data: ReadOrWritable<Shift[]>;
  let header = true;
  let state: State = GLOBAL_STATE;
  let rowActions = new Map<string, (item: Shift) => void>();
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: Record<string, boolean> = {};
  let flatColumns: FlatColumn<Shift, any, string>[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  let className = "";

  let selected: Shift | undefined = undefined;
  let alertOpen = false;
  let dialogOpen = false;
  let dialogTitle = "Edit Person";

  // Column definitions
  let columnInitializers: ColumnInitializer<Shift>[] = [
    {
      accessor: (row) => row as Display,
      cell: (cell) => createRender(ProfilePicture, { item: cell.value }),
      header: "Icon",
      id: "icon",
      plugins: { sort: { disable: true }, tableFilter: { disable: true } },
    },
    { accessor: (row: Shift) => row.name, header: "Name", id: "name" },
    { accessor: (row: Shift) => row.fmtStartTime(), header: "Start Time", id: "timeStart" },
    { accessor: (row: Shift) => row.fmtEndTime(), header: "End Time", id: "timeEnd" },
    {
      accessor: (row: Shift) => `${formattedDuration(row.paidDuration)}`,
      header: "Contracted Duration",
      id: "contractedDuration",
    },
    {
      accessor: (row: Shift) => capitalize(row.describePattern()),
      header: "Recurrence",
      id: "recurrence",
    },
  ];

  // If the old ("granular") mode is used, display tasks in each shift.
  // This requirement has been dropped: we now assign people to monolithic shifts without any speciific tasks.
  // Keeping this code as it may be useful in the future.
  const settings = state.settings;
  if (_get(settings).assignmentMode === "granular") {
    columnInitializers.push({
      accessor: (row: Shift) => Array.from(row.tasks.values()),
      cell: (cell) => createRender(ProfilesList, { items: cell.value, placeholder: "No Tasks" }),
      header: "Tasks in Shift",
      id: "tasks",
      plugins: {
        sort: { getSortValue: (value: Task[]) => value.map((t) => t.name).join(" ") },
        tableFilter: { getFilterValue: (value: Task[]) => value.map((t) => t.name).join(" ") },
      },
    });
  }

  // Row action definitions
  let actions = new Map([...rowActions, ["Edit", rowClick], ["Delete", rowDelete]]);

  function rowDelete(item: Shift) {
    if (_get(state.settings).askDeleteConfirmation) {
      selected = item;
      alertOpen = true;
    } else {
      item.delete();
    }
  }

  function rowClick(item: Shift) {
    dialogTitle = "Edit Shift";
    selected = item.pull() as Shift;
    dialogOpen = true;
  }

  function newShift() {
    dialogTitle = "Create new Shift";
    selected = new Shift(
      { name: "", pattern: { start: new Time(9, 0), end: new Time(17, 0) } },
      state,
    );
    dialogOpen = true;
  }

  export { data, actions, header, state, className as class };
</script>

<div class="flex flex-col items-start justify-start {className}">
  {#if header}
    <TableHeader sticky={true}>
      <svelte:fragment slot="start">
        <Button
          class="text-muted-foreground hover:text-accent-foreground"
          on:click={newShift}
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
<EditDialog {selected} bind:open={dialogOpen} title={dialogTitle} />
<DeleteDialog {selected} bind:open={alertOpen} />
