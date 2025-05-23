<!--
Dropdown menu that is displayed at the end of each row.

Props:
- `item`: The item this row represents.
- `actions`: A map of human-readable names to functions that take the item as an argument.
-->
<!--suppress ES6UnusedImports -->
<script lang="ts" generics="T">
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Ellipsis from "lucide-svelte/icons/ellipsis";
  import type { RowActions } from ".";

  let item: T;
  let actions: RowActions<T> = new Map();
  let open = false;

  export { actions, item };
</script>

<DropdownMenu.Root bind:open>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} class="relative h-8 w-8 p-0" size="icon" variant="ghost">
      <span class="sr-only">Open menu</span>
      <Ellipsis class="h-4 w-4" />
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content>
    {#each Array.from(actions.entries()) as [key, fn]}
      <DropdownMenu.Item
        on:click={() => fn(item)}
        class="transition-all {key.toLowerCase() === 'delete'
          ? 'text-destructive hover:!bg-destructive hover:!text-destructive-foreground'
          : ''}">{key}</DropdownMenu.Item
      >
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
