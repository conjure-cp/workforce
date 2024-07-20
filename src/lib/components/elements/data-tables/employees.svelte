<script lang="ts">
  // noinspection ES6UnusedImports
  import * as Table from "$lib/components/ui/table";
  import type { Person } from "$lib/types/core.ts";
  import { employees } from "$lib/stores.ts";
  import { createRender, createTable, type ReadOrWritable, Render, Subscribe } from "svelte-headless-table";
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import ConstraintsList from "$lib/components/elements/constraint/constraints-list.svelte";

  let data: ReadOrWritable<Person[]> = employees;

  const table = createTable(data);
  const columns = table.createColumns([
    table.column({
      accessor: (row: Person) => row,
      header: "Avatar",
      cell: (data) => createRender(PersonAvatar, { person: data.value })
    }),
    table.column({
      accessor: "name",
      header: "Name"
    }),
    table.column({
      accessor: "job_title",
      header: "Job Title"
    }),
    table.column({
      accessor: (row: Person) => row.skills,
      header: "Skills",
      cell: (data) => createRender(SkillsList, { skills: data.value })
    }),
    table.column({
      accessor: (row: Person) => row.constraints,
      header: "Constraints",
      cell: (data) => createRender(ConstraintsList, { constraints: data.value })
    })
  ]);

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } =
    table.createViewModel(columns);

  export { data };
</script>

<div class="rounded-md border">
  <Table.Root {...$tableAttrs}>
    <Table.Header>
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()}>
                <Table.Head {...attrs}>
                  <Render of={cell.render()} />
                </Table.Head>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Header>
    <Table.Body {...$tableBodyAttrs}>
      {#each $pageRows as row (row.id)}
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs}>
                  <Render of={cell.render()} />
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>
</div>