<script lang="ts">
  // noinspection ES6UnusedImports
  import * as Resizable from "$lib/components/ui/resizable";
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
  import ShiftCard from "$lib/components/elements/shift-card/shift-card.svelte";
  import { Button } from "$lib/components/ui/button";
  import { FilterIcon } from "lucide-svelte";

  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import { SidebarPosition } from "$lib/components/ui/sidebar/index.ts";
  import { Shift } from "$lib/types/core.ts";

  import { shifts } from "$lib/stores.ts";

  let schedules: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];

  let shifts_value: Shift[];

  shifts.subscribe(value => {
    shifts_value = value;
  });
</script>

<div class="bg-gray-50 w-full">
  <main class="w-full h-dvh flex flex-col items-start justify-start overflow-y-scroll">
    <TopBar sticky={true}>
      <svelte:fragment slot="start">
        <Combobox items={schedules} placeholder="Select schedule" icon="mdi:calendar" />
      </svelte:fragment>

      <svelte:fragment slot="end">
        <Button size="icon_xl" variant="ghost" on:click={() => {}}>
          <FilterIcon />
        </Button>
        <Search />
      </svelte:fragment>
    </TopBar>

    <Resizable.PaneGroup direction="horizontal" style="overflow: unset !important; height: fit-content !important;">
      <Resizable.Pane class="flex flex-col gap-4 p-4 h-fit">
        {#each shifts_value as shift}
          <ShiftCard shift={shift} />
        {/each}
      </Resizable.Pane>

      <Resizable.Handle />

      <Resizable.Pane class="flex flex-col gap-4 p-4 h-fit">
      </Resizable.Pane>

      <Resizable.Handle />

      <Resizable.Pane class="flex flex-col gap-4 p-4 h-fit">
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </main>
</div>

<Sidebar position={SidebarPosition.right}>

</Sidebar>
