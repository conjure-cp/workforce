<!--
Dropdown that allows the user to hide/show certain columns in a table.
Props:
- `flatColumns`: The table columns (see svelte-headless-table and the `data-table` component). 
- `hideForId`: An object mapping column IDs to booleans (true = hidden). A column is hidden iff it is explicitly mapped to `true`.
-->

<script lang="ts">
  // We need to allow explicit any here because of the way the svelte-headless-table library is written
  /* eslint-disable  @typescript-eslint/no-explicit-any */

  import type { FlatColumn } from "svelte-headless-table";

  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { EyeOffIcon } from "lucide-svelte";

  let flatColumns: FlatColumn<any, any, string>[];
  let hideForId: Record<string, boolean> = {};

  $: hiddenIds = Object.entries(hideForId)
    .filter(([, hide]) => hide)
    .map(([id]) => id);

  export { flatColumns, hideForId };
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button
          builders={[builder]}
          class="hover:text-accent-foreground {hiddenIds.length === 0 && 'text-muted-foreground'}"
          on:click={() => {}}
          size="icon-xl"
          variant="ghost"
        >
          <EyeOffIcon />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        {#if hiddenIds.length === 0}
          Hide columns
        {:else if hiddenIds.length === 1}
          1 column hidden
        {:else}
          {hiddenIds.length} columns hidden
        {/if}
      </Tooltip.Content>
    </Tooltip.Root>
  </DropdownMenu.Trigger>

  <DropdownMenu.Content>
    {#each flatColumns as col}
      <DropdownMenu.CheckboxItem
        bind:checked={hideForId[col.id]}
        class={hideForId[col.id] ? "text-muted-foreground line-through" : ""}
      >
        {col.header}
      </DropdownMenu.CheckboxItem>
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>
