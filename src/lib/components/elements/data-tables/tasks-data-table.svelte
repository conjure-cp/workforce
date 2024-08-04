<script lang="ts">
  import type { Skill, Task } from "$lib/types";
  import { getConstraintsFor, tasks } from "$lib/stores.ts";
  import {
    createRender,
    DataBodyCell,
    FlatColumn,
    type ReadOrWritable
  } from "svelte-headless-table";
  import TaskBadge from "$lib/components/elements/task/task-badge.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { capitalize } from "$lib/utils.ts";
  import ConstraintsList from "$lib/components/elements/constraint/constraints-list.svelte";
  import type { Constraint } from "$lib/types/constraints.ts";
  import type { AnyPlugins } from "svelte-headless-table/plugins";
  import type { ColumnInitializer } from "$lib/components/elements/data-tables/core";

  let data: ReadOrWritable<Task[]> = tasks;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<Task, AnyPlugins, string>[];
  let className: string = "";

  const columnInitializers: ColumnInitializer[] = [
    {
      id: "icon",
      accessor: (row: Task) => row,
      header: "Icon",
      cell: (cell: DataBodyCell<unknown>) => createRender(TaskBadge, { task: cell.value as Task }),
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
      id: "required_skills",
      accessor: (row: Task) => row.required_skills,
      header: "Required skills",
      cell: (cell: DataBodyCell<unknown>) => createRender(SkillsList, {
        skills: cell.value as Skill[],
        compact: true
      }),
      plugins: {
        tableFilter: {
          getFilterValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        },
        sort: {
          getSortValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        }
      }
    },
    {
      id: "constraints",
      accessor: (row: Task) => getConstraintsFor(row),
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
