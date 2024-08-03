<script lang="ts">
  import { Person, Skill, type Task } from "$lib/types";
  import { skills } from "$lib/stores.ts";
  import { createRender, DataBodyCell, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import SkillBadge from "$lib/components/elements/skill/skill-badge.svelte";
  import TasksList from "$lib/components/elements/task/tasks-list.svelte";
  import PeopleList from "$lib/components/elements/person/people-list.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { capitalize } from "$lib/utils.ts";
  import type { AnyPlugins } from "svelte-headless-table/plugins";
  import type { ColumnInitializer } from "$lib/components/elements/data-tables/core";

  let data: ReadOrWritable<Skill[]> = skills;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<Skill, AnyPlugins, string>[];
  let className: string = "";

  const columnInitializers: ColumnInitializer[] = [
    {
      id: "icon",
      accessor: (row: Skill) => row,
      header: "Icon",
      cell: (cell: DataBodyCell<unknown>) => createRender(SkillBadge, { skill: cell.value as Skill }),
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
      id: "description",
      accessor: "description",
      header: "Description"
    },
    {
      id: "tasks",
      accessor: (row: Skill) => row.tasks,
      header: "Required for tasks",
      cell: (cell: DataBodyCell<unknown>) => createRender(TasksList, { tasks: cell.value as Task[] }),
      plugins: {
        tableFilter: {
          getFilterValue: (value: Task[]) => value.map((task) => task.name).join(" ")
        },
        sort: {
          getSortValue: (value: Task[]) => value.map((task) => task.name).join(" ")
        }
      }
    },
    {
      id: "people",
      accessor: (row: Skill) => row.people,
      header: "People with this skill",
      cell: (cell: DataBodyCell<unknown>) => createRender(PeopleList, {
        people: cell.value as Person[],
        compact: true
      }),
      plugins: {
        tableFilter: {
          getFilterValue: (value: Person[]) => value.map((person) => person.name).join(" ")
        },
        sort: {
          getSortValue: (value: Person[]) => value.map((person) => person.name).join(" ")
        }
      }
    }
  ];

  export { data, filterValue, sortKeys, hideForId, flatColumns, className as class };
</script>

<DataTable {data} {columnInitializers} bind:filterValue bind:sortKeys bind:hideForId bind:flatColumns
           class={className} />
