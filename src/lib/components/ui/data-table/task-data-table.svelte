<script lang="ts">
  import { state as GLOBAL_STATE, Skill, State, Task } from "$lib/model";
  import type { Geopoint } from "$lib/model/geocoding";
  import type { Display } from "$lib/model/ui";
  import { PlusIcon } from "lucide-svelte";
  import { createRender, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import {
    type AnyPlugins,
    createSortKeysStore,
    type WritableSortKeys
  } from "svelte-headless-table/plugins";
  import { type Writable, writable } from "svelte/store";
  import { Button } from "../button";
  import { EditDialog } from "../edit-dialog";
  import { ProfilePicture, ProfilesList } from "../profile-picture";
  import { Search } from "../search";
  import { type ColumnInitializer, DataTableCore } from "./core";
  import { ColumnHideSelector, mkCapacity, TableHeader } from "./lib";

  let data: ReadOrWritable<Task[]>;
  let header: boolean = true;
  let state: State = GLOBAL_STATE;
  let rowActions: Map<string, (item: Task) => void> = new Map();
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<Task, AnyPlugins, string>[];
  let className: string = "";

  let selected: Task | undefined = undefined;
  let dialogOpen: boolean = false;
  let dialogTitle: string = "Edit Person";
  let columnInitializers: ColumnInitializer<Task>[] = [
    {
      accessor: (row) => row as Display,
      cell: (cell) => createRender(ProfilePicture, { item: cell.value }),
      header: "Picture",
      id: "picture",
      plugins: {
        sort: {
          disable: true
        },
        tableFilter: {
          disable: true
        }
      }
    },
    {
      accessor: (row: Task) => row.name,
      header: "Name",
      id: "name"
    },
    {
      accessor: (row: Task) => mkCapacity(row.min.people, row.max.people, "people"),
      header: "Required Workers",
      id: "capacity"
    },
    {
      accessor: (row: Task) => row.skills,
      cell: (cell) => createRender(ProfilesList, { items: cell.value, placeholder: "No Skills" }),
      header: "Required Skills",
      id: "skills",
      plugins: {
        sort: {
          getSortValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        },
        tableFilter: {
          getFilterValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        }
      }
    }
  ];

  let actions = new Map([
    ...rowActions,
    ["Edit", (item: Task) => rowClick(item)],
    ["Delete", (item: Task) => item.delete()]
  ]);

  function rowClick(item: Task) {
    dialogTitle = "Edit Task";
    selected = item;
    dialogOpen = true;
  }

  function markerClick(item: Geopoint | Task) {
    if (item instanceof Task) {
      rowClick(item);
    }
  }

  function newTask() {
    dialogTitle = "Create new Location";
    selected = new Task({}, state);
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
      defaultAction={rowClick}
    />
  </div>
</div>
<EditDialog item={selected} bind:open={dialogOpen} title={dialogTitle} />
