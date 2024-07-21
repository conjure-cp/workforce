<script lang="ts">
  import { type Person, Skill } from "$lib/types/core.ts";
  import { employees } from "$lib/stores.ts";
  import { createRender, createTable, type ReadOrWritable } from "svelte-headless-table";
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import ConstraintsList from "$lib/components/elements/constraint/constraints-list.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import type { Constraint } from "$lib/types/constraints.ts";

  let data: ReadOrWritable<Person[]> = employees;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let className: string = "";

  const table = createTable(data);
  const columns = table.createColumns([
    table.column({
      id: "avatar",
      accessor: (row: Person) => row,
      header: "Avatar",
      cell: (data) => createRender(PersonAvatar, { person: data.value }),
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
      header: "Name"
    }),
    table.column({
      id: "job_title",
      accessor: "job_title",
      header: "Job Title"
    }),
    table.column({
      id: "skills",
      accessor: (row: Person) => row.skills,
      header: "Skills",
      cell: (data) => createRender(SkillsList, { skills: data.value }),
      plugins: {
        filter: {
          getFilterValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        },
        sort: {
          getSortValue: (value: Skill[]) => value.map((skill) => skill.name).join(" ")
        }
      }
    }),
    table.column({
      id: "constraints",
      accessor: (row: Person) => row.constraints,
      header: "Constraints",
      cell: (data) => createRender(ConstraintsList, { constraints: data.value }),
      plugins: {
        filter: {
          getFilterValue: (value: Constraint[]) => value.map((constraint) => constraint.type).join(" ")
        },
        sort: {
          getSortValue: (value: Constraint[]) => value.map((constraint) => constraint.type).join(" ")
        }
      }
    })
  ]);

  export { data, filterValue, sortKeys, className as class };
</script>

<DataTable {data} {columns} bind:filterValue bind:sortKeys class={className} />
