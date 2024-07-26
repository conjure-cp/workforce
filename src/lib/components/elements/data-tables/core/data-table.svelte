<script lang="ts">
  // noinspection ES6UnusedImports
  import * as Table from "$lib/components/ui/table";
  import {
    type ReadOrWritable,
    Column,
    createTable, Subscribe, Render
  } from "svelte-headless-table";
  import {
    addHiddenColumns,
    addPagination, addSelectedRows,
    addSortBy,
    addTableFilter,
    type AnyPlugins,
    type PaginationConfig,
    type SortByConfig
  } from "svelte-headless-table/plugins";
  import { Button } from "$lib/components/ui/button";
  import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-svelte";
  import { cn } from "$lib/utils.ts";

  let data: ReadOrWritable<any[]>;
  let columns: Column<any, AnyPlugins>[];
  let paginationConfig: PaginationConfig | undefined = undefined;
  let sortByConfig: SortByConfig | undefined = undefined;
  let className: string = "";
  let table = createTable(data, {
    page: addPagination(paginationConfig),
    sort: addSortBy(sortByConfig),
    filter: addTableFilter({
      fn: ({ filterValue, value }) => {
        return value.toLowerCase().includes(filterValue.toLowerCase());
      }
    }),
    hide: addHiddenColumns(),
    select: addSelectedRows()
  });

  const {
    headerRows,
    pageRows,
    tableAttrs,
    tableBodyAttrs,
    pluginStates,
    flatColumns
  } = table.createViewModel(columns);
  const { pageIndex, hasPreviousPage, hasNextPage } = pluginStates.page;
  const { filterValue } = pluginStates.filter;
  const { sortKeys } = pluginStates.sort;
  const { hiddenColumnIds } = pluginStates.hide;
  const { selectedDataIds } = pluginStates.select;

  let hideForId: { [key: string]: boolean } = {};

  $: $hiddenColumnIds = Object.entries(hideForId)
    .filter(([, hide]) => hide)
    .map(([id]) => id);

  export { data, columns, filterValue, sortKeys, hideForId, flatColumns, className as class };
</script>

<div class={className}>
  <div class="rounded-md border">
    <Table.Root {...$tableAttrs}>
      <Table.Header>
        {#each $headerRows as headerRow (headerRow.id)}
          <Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
            <Table.Row {...rowAttrs}>
              {#each headerRow.cells as cell (cell.id)}
                <Subscribe
                  attrs={cell.attrs()}
                  let:attrs
                  props={cell.props()}
                  let:props
                >
                  <Table.Head
                    {...attrs}
                    class={cn("text-sm", "[&:has([role=checkbox])]:pl-3")}
                  >
                    {#if props.sort.disabled}
                      <Render of={cell.render()} />
                    {:else}
                      <Button variant="ghost" size="sm" on:click={props.sort.toggle}>
                        <Render of={cell.render()} />
                        {#if props.sort.order === "asc"}
                          <ArrowUp class={cn($sortKeys[0]?.id === cell.id && "text-foreground", "ml-2 h-4 w-4")} />
                        {:else if props.sort.order === "desc"}
                          <ArrowDown class={cn($sortKeys[0]?.id === cell.id && "text-foreground", "ml-2 h-4 w-4")} />
                        {:else}
                          <ArrowUpDown
                            class={cn(
                            $sortKeys[0]?.id === cell.id && "text-foreground",
                            "ml-2 h-4 w-4"
                          )}
                          />
                        {/if}
                      </Button>
                    {/if}
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
            <Table.Row
              {...rowAttrs}
            >
              {#each row.cells as cell (cell.id)}
                <Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                  <Table.Cell class="[&:has([role=checkbox])]:pl-3" {...attrs}>
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
  <div class="flex items-center justify-end space-x-4 py-4">
    <Button
      variant="outline"
      size="sm"
      on:click={() => ($pageIndex = $pageIndex - 1)}
      disabled={!$hasPreviousPage}>Previous
    </Button
    >
    <Button
      variant="outline"
      size="sm"
      disabled={!$hasNextPage}
      on:click={() => ($pageIndex = $pageIndex + 1)}>Next
    </Button
    >
  </div>
</div>