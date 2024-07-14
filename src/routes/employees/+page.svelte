<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  import { employees } from "$lib/stores.ts";

  let employees_list: Person[] = [];

  employees.subscribe(value => {
    employees_list = value;
  });
</script>

