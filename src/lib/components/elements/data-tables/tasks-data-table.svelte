<script lang="ts">
  import { Skill, type Task } from "$lib/types/core.ts";
  import { tasks } from "$lib/stores.ts";
  import { createRender, createTable, type ReadOrWritable } from "svelte-headless-table";
  import TaskBadge from "$lib/components/elements/task/task-badge.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import { capitalize } from "$lib/utils.ts";

  let data: ReadOrWritable<Task[]> = tasks;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let className: string = "";

  const table = createTable(data);
  const columns = table.createColumns([
    table.column({
      id: "icon",
      accessor: (row: Task) => row,
      header: "Icon",
      cell: (data) => createRender(TaskBadge, { task: data.value }),
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
      id: "required_skills",
      accessor: (row: Task) => row.required_skills,
      header: "Required skills",
      cell: (data) => createRender(SkillsList, { skills: data.value, compact: true }),
      plugins: {
        filter: {
          getFilterValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        },
        sort: {
          getSortValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        }
      }
    })
  ]);

  export { data, filterValue, sortKeys, className as class };
</script>

<DataTable {data} {columns} bind:filterValue bind:sortKeys class={className} />
