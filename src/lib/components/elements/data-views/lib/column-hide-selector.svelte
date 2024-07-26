<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { EyeOffIcon } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import type { AnyPlugins } from "svelte-headless-table/plugins";
  import type { FlatColumn } from "svelte-headless-table";

  let flatColumns: FlatColumn<any, AnyPlugins, string>[];
  let hideForId: { [key: string]: boolean } = {};

  $: hiddenIds = Object.entries(hideForId)
    .filter(([, hide]) => hide)
    .map(([id]) => id);

  export { flatColumns, hideForId };
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Tooltip.Root>
      <Tooltip.Trigger>
        <Button size="icon_xl" variant="ghost" on:click={() => {}} builders={[builder]}
                class="hover:text-accent-foreground {hiddenIds.length === 0 && 'text-muted-foreground'}">
          <EyeOffIcon />
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        {#if hiddenIds.length === 0}
          Hide columns
        {:else}
          {#if hiddenIds.length === 1}
            1 column hidden
          {:else}
            {hiddenIds.length} columns hidden
          {/if}
        {/if}
      </Tooltip.Content>
    </Tooltip.Root>
  </DropdownMenu.Trigger>

  <DropdownMenu.Content>
    {#each flatColumns as col}
      <DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
        {col.header}
      </DropdownMenu.CheckboxItem>
    {/each}
  </DropdownMenu.Content>
</DropdownMenu.Root>