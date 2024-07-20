<script lang="ts">
  // noinspection ES6UnusedImports
  import * as Resizable from "$lib/components/ui/resizable";
  import TopBar from "$lib/components/elements/top-bar/top_bar.svelte";
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
  import ShiftCard from "$lib/components/elements/shift/shift-card.svelte";
  import { Button } from "$lib/components/ui/button";
  import { FilterIcon } from "lucide-svelte";
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import { SidebarPosition } from "$lib/components/ui/sidebar/index.ts";
  import { Shift } from "$lib/types/core.ts";
  import { shifts } from "$lib/stores.ts";
  import MiniSearch from "minisearch";

  let schedules: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];

  let miniSearch = new MiniSearch({
    idField: "uuid",
    extractField: (shift: Shift, fieldName: string) => {
      switch (fieldName) {
        case "uuid":
          return shift.uuid;
        case "name":
          return shift.name;
        case "description":
          return shift.description;
        case "location":
          return shift.location.name;
        case "tasks":
          return shift.tasks.map((task) => task.name).join(" ");
        case "people":
          return shift.people.map((person) => person.name).join(" ");
        case "start_time":
          return shift.start_time_fmt;
        case "end_time":
          return shift.end_time_fmt;
        default:
          return "";
      }
    },
    fields: ["name", "description", "location", "tasks", "people", "start_time", "end_time"],
    storeFields: ["name"]
  });
  let all_shifts: Shift[];
  let search: string = "";
  $: search_ids = miniSearch.search(search, {
    prefix: true,
    fuzzy: 0.2
  }).map((res) => res.id);
  $: filtered_shifts = search === "" ? all_shifts : all_shifts.filter((shift) => search_ids.includes(shift.uuid));

  shifts.subscribe(value => {
    miniSearch.removeAll();
    miniSearch.addAllAsync(value);
    all_shifts = value;
  });
</script>

<div class="bg-gray-50 w-full">
  <main class="w-full h-dvh flex flex-col items-start justify-start overflow-y-scroll">
    <TopBar sticky={true}>
      <svelte:fragment slot="start">
        <Combobox options={schedules} placeholder="Select schedule..." icon={{icon: "mdi:calendar"}} />
      </svelte:fragment>

      <svelte:fragment slot="end">
        <Button size="icon_xl" variant="ghost" on:click={() => {}}>
          <FilterIcon />
        </Button>
        <Search onInput={(s) => search = s} />
      </svelte:fragment>
    </TopBar>

    <!-- The !important styles are needed to override the default styling of the component and make it grow with the number of shift cards -->
    <Resizable.PaneGroup direction="horizontal" style="overflow: unset !important; height: fit-content !important;">
      <Resizable.Pane class="flex flex-col gap-4 p-4 h-fit">
        {#each filtered_shifts as shift}
          {#if shift !== undefined}
            <ShiftCard shift={shift} />
          {/if}
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
