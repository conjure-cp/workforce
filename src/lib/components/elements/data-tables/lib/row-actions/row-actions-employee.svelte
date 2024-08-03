<!--suppress ES6UnusedImports -->
<script lang="ts">
  import Ellipsis from "lucide-svelte/icons/ellipsis";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Button } from "$lib/components/ui/button";
  import type { Person } from "$lib/types";
  import PersonEditDialog from "$lib/components/elements/person/person-edit-dialog.svelte";
  import { employees, deleteEmployee } from "$lib/stores.ts";

  let person: Person;
  let open: boolean = false;
  let dialogOpen: boolean = false;

  function handleDelete() {
    deleteEmployee(person);
    open = false;
  }

  function handleEdit() {
    dialogOpen = true;
  }

  function handleDialogSubmit(p: Person) {
    employees.update((list) => {
      const index = list.findIndex((e) => e === person);
      list[index] = p;
      return list;
    });
  }

  export { person };
</script>

<PersonEditDialog {person} bind:open={dialogOpen} onSubmit={handleDialogSubmit} />
<DropdownMenu.Root bind:open>
  <DropdownMenu.Trigger asChild let:builder>
    <Button
      variant="ghost"
      builders={[builder]}
      size="icon"
      class="relative h-8 w-8 p-0"
    >
      <span class="sr-only">Open menu</span>
      <Ellipsis class="h-4 w-4" />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    <DropdownMenu.Item on:click={handleEdit}>Edit employee</DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item on:click={handleDelete}>Delete employee</DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>