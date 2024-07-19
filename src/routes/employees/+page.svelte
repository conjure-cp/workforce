<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  import { employees } from "$lib/stores.ts";
  import { createRender, createTable } from "svelte-headless-table";
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";

  const table = createTable(employees);
  const columns = table.createColumns([
    table.column({
      accessor: (row: Person) => row,
      header: "Name",
      cell: (data) => createRender(PersonAvatar, { person: data.value })
    }),
    table.column({
      accessor: "name",
      header: "Name"
    }),
    table.column({
      accessor: "job_title",
      header: "Job Title"
    })
  ]);
</script>

