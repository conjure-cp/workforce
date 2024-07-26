<script lang="ts">
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import SkillsDataTable from "$lib/components/elements/data-tables/skills-data-table.svelte";
  import type { ReadOrWritable } from "svelte-headless-table";
  import type { Skill } from "$lib/types/core.ts";
  import { skills } from "$lib/stores.ts";
  import { writable, type Writable } from "svelte/store";
  import { createSortKeysStore, type WritableSortKeys } from "svelte-headless-table/plugins";

  let data: ReadOrWritable<Skill[]> = skills;
  let filterValue: Writable<string> = writable("");
  let sortKeys: WritableSortKeys = createSortKeysStore([]);
  let className: string = "";

  export { data, className as class };
</script>

<div class="h-full w-full flex flex-col items-start justify-start overflow-y-scroll {className}">
  <TopBar sticky={true}>
    <svelte:fragment slot="start">
      <slot name="start" />
    </svelte:fragment>

    <svelte:fragment slot="middle">
      <slot name="middle" />
    </svelte:fragment>

    <svelte:fragment slot="end">
      <Search onInput={(s) => filterValue.set(s)} />
    </svelte:fragment>
  </TopBar>
  <SkillsDataTable {data} bind:filterValue bind:sortKeys class="w-full" />
</div>