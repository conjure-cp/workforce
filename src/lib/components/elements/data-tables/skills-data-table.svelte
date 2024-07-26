<script lang="ts">
  import { Person, Skill, type Task } from "$lib/types/core.ts";
  import { skills } from "$lib/stores.ts";
  import { createRender, createTable, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import SkillBadge from "$lib/components/elements/skill/skill-badge.svelte";
  import TasksList from "$lib/components/elements/task/tasks-list.svelte";
  import PeopleList from "$lib/components/elements/person/people-list.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { capitalize } from "$lib/utils.ts";
  import type { AnyPlugins } from "svelte-headless-table/dist/plugins";

  let data: ReadOrWritable<Skill[]> = skills;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<any, AnyPlugins, string>[];
  let className: string = "";

  const table = createTable(data);
  const columns = table.createColumns([
    table.column({
      id: "icon",
      accessor: (row: Skill) => row,
      header: "Icon",
      cell: (data) => createRender(SkillBadge, { skill: data.value }),
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
      id: "description",
      accessor: "description",
      header: "Description"
    }),
    table.column({
      id: "tasks",
      accessor: (row: Skill) => row.tasks,
      header: "Required for tasks",
      cell: (data) => createRender(TasksList, { tasks: data.value }),
      plugins: {
        filter: {
          getFilterValue: (value: Task[]) => value.map((task) => task.name).join(" ")
        },
        sort: {
          getSortValue: (value: Task[]) => value.map((task) => task.name).join(" ")
        }
      }
    }),
    table.column({
      id: "people",
      accessor: (row: Skill) => row.people,
      header: "People with this skill",
      cell: (data) => createRender(PeopleList, { people: data.value, compact: true }),
      plugins: {
        filter: {
          getFilterValue: (value: Person[]) => value.map((person) => person.name).join(" ")
        },
        sort: {
          getSortValue: (value: Person[]) => value.map((person) => person.name).join(" ")
        }
      }
    })
  ]);

  export { data, filterValue, sortKeys, hideForId, flatColumns, className as class };
</script>

<DataTable {data} {columns} bind:filterValue bind:sortKeys bind:hideForId bind:flatColumns class={className} />
