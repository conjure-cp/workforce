<script lang="ts">
  import type { Person, Skill } from "$lib/types";
  import { employees, getConstraintsFor } from "$lib/stores.ts";
  import { createRender, DataBodyCell, FlatColumn, type ReadOrWritable } from "svelte-headless-table";
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import ConstraintsList from "$lib/components/elements/constraint/constraints-for-list.svelte";
  import DataTable from "$lib/components/elements/data-tables/core/data-table.svelte";
  import RowActionsEmployee from "$lib/components/elements/data-tables/lib/row-actions/row-actions-employee.svelte";
  import { writable, type Writable } from "svelte/store";
  import { type AnyPlugins, createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";
  import type { ColumnInitializer } from "$lib/components/elements/data-tables/core";
  import { getAgeForPerson } from "$lib/types/person.ts";

  let data: ReadOrWritable<Person[]> = employees;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let hideForId: { [key: string]: boolean } = {};
  let flatColumns: FlatColumn<Person, AnyPlugins, string>[];
  let className: string = "";

  const columnInitializers: ColumnInitializer[] = [
    {
      id: "avatar",
      accessor: (row: Person) => row,
      header: "Avatar",
      cell: (cell: DataBodyCell<unknown>) => createRender(PersonAvatar, { person: cell.value as Person }),
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
      header: "Name"
    },
    {
      id: "age",
      accessor: (row: Person) => getAgeForPerson(row),
      header: "Age"
    },
    {
      id: "job_title",
      accessor: "job_title",
      header: "Job Title"
    },
    {
      id: "skills",
      accessor: (row: Person) => row.skills,
      header: "Skills",
      cell: (cell: DataBodyCell<unknown>) => createRender(SkillsList, { skills: cell.value as Skill[] }),
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
      accessor: (row: Person) => row,
      header: "Constraints",
      cell: (cell: DataBodyCell<unknown>) => createRender(ConstraintsList, {
        forOperand: cell.value as Person
      }),
      plugins: {
        tableFilter: {
          getFilterValue: (value: Person) => getConstraintsFor(value).map((constraint) => constraint.type).join(" ")
        },
        sort: {
          getSortValue: (value: Person) => getConstraintsFor(value).map((constraint) => constraint.type).join(" ")
        }
      }
    },
    {
      accessor: (row: Person) => row,
      header: "Actions",
      cell: (cell: DataBodyCell<unknown>) => {
        return createRender(RowActionsEmployee, { person: cell.value as Person });
      },
      plugins: {
        tableFilter: {
          disable: true
        },
        sort: {
          disable: true
        }
      }
    }
  ];

  export { data, filterValue, sortKeys, hideForId, flatColumns, className as class };
</script>

<DataTable {data} {columnInitializers} bind:filterValue bind:sortKeys bind:hideForId bind:flatColumns
           class={className} />
