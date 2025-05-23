<!--
A data table for the `Task` model.
This is currently not used anywhere as the "granular" mode has been dropped.
The models have changed since and this component has not been tested. Keeping it in case we need it in the future.
See also: `$lib/model/core/task.ts`.
-->
<script lang="ts">
  import { EditDialog } from "$lib/components/edit-dialog";
  import { ProfilePicture } from "$lib/components/profile";
  import { Search } from "$lib/components/search";
  import { Button } from "$lib/components/ui/button";
  import { state as GLOBAL_STATE, State, Task } from "$lib/model";
  import type { Display } from "$lib/ui";
  import { PlusIcon } from "lucide-svelte";
  import { createRender, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { get as _get, type Writable, writable } from "svelte/store";
  import PropertyValue from "../property/property-value.svelte";
  import { type ColumnInitializer, DataTableCore } from "./core";
  import { ColumnHideSelector, mkCapacity, TableHeader } from "./lib";
  import DeleteDialog from "./lib/delete-dialog.svelte";

  let data: ReadOrWritable<Task[]>;
  let header = true;
  let state: State = GLOBAL_STATE;
  let rowActions = new Map<string, (item: Task) => void>();
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: Record<string, boolean> = {};
  let flatColumns: FlatColumn<Task, any, string>[]; // eslint-disable-line @typescript-eslint/no-explicit-any
  let className = "";

  let selected: Task | undefined = undefined;
  let alertOpen = false;
  let dialogOpen = false;
  let dialogTitle = "Edit Task";
  let columnInitializers: ColumnInitializer<Task>[] = [
    {
      accessor: (row) => row as Display,
      cell: (cell) => createRender(ProfilePicture, { item: cell.value }),
      header: "Picture",
      id: "picture",
      plugins: { sort: { disable: true }, tableFilter: { disable: true } },
    },
    { accessor: (row: Task) => row.name, header: "Name", id: "name" },
    {
      accessor: (row: Task) => mkCapacity(row.min.people, row.max.people, "people"),
      header: "Required Workers",
      id: "capacity",
    },
  ];

  for (const prop of _get(state.templates).task.keys) {
    columnInitializers.push({
      accessor: (row: Task) => row.properties.get(prop),
      cell: (cell) => createRender(PropertyValue, { property: prop, value: cell.value }),
      header: prop.name,
      id: prop.uuid,
    });
  }

  let actions = new Map([...rowActions, ["Edit", rowClick], ["Delete", rowDelete]]);

  function rowDelete(item: Task) {
    if (_get(state.settings).askDeleteConfirmation) {
      selected = item;
      alertOpen = true;
    } else {
      item.delete();
    }
  }

  function rowClick(item: Task) {
    dialogTitle = "Edit Task";
    selected = item.pull() as Task;
    dialogOpen = true;
  }

  function newTask() {
    dialogTitle = "Create new Task";
    selected = new Task({ name: "" }, state);
    dialogOpen = true;
  }

  export { data, actions, header, state, className as class };
</script>

<div class="flex flex-col items-start justify-start {className}">
  <div class="mt-4 flex h-max w-full flex-col items-start justify-start overflow-y-scroll">
    {#if header}
      <TableHeader sticky={true}>
        <svelte:fragment slot="start">
          <Button
            class="text-muted-foreground hover:text-accent-foreground"
            on:click={newTask}
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
</div>
<EditDialog {selected} bind:open={dialogOpen} title={dialogTitle} />
<DeleteDialog {selected} bind:open={alertOpen} />
