<script lang="ts">
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import TopBar from "$lib/components/ui/top-bar/top_bar.svelte";
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import Search from "$lib/components/ui/search/search.svelte";
  import { FilterIcon } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import ShiftCard from "$lib/components/elements/shift-card/shift-card.svelte";
  import * as Resizable from "$lib/components/ui/resizable";
  import { Shift } from "$lib/types/core.ts";
  import { ZonedDateTime, now, getLocalTimeZone } from "@internationalized/date";

  let schedules: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];

  let shifts: Shift[] = [
    new Shift("Shift 1", "Loren ipsum dolor sit amet", now(getLocalTimeZone()), now(getLocalTimeZone()), {
        name: "Location 1",
        constraints: []
      },
      [
        {
          name: "Task 1",
          description: "Loren ipsum dolor sit amet",
          min_people: 1,
          max_people: 2,
          people: [],
          required_skills: [],
          constraints: []
        },
        {
          name: "Task 2",
          description: "Loren ipsum dolor sit amet",
          min_people: 1,
          max_people: 2,
          people: [],
          required_skills: [],
          constraints: []
        }
      ]
    )
  ];
</script>


<main class="w-full h-full flex flex-col items-start justify-start overflow-y-scroll">
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

  <Resizable.PaneGroup direction="horizontal" style="overflow-y: scroll">
    <Resizable.Pane class="flex flex-col bg-green-200">
      {#each shifts as shift}
        <ShiftCard shift={shift} />
      {/each}
    </Resizable.Pane>

    <Resizable.Handle />

    <Resizable.Pane class="h-[2000px] flex flex-col bg-yellow-200">
    </Resizable.Pane>

    <Resizable.Handle />

    <Resizable.Pane class="h-[400px] flex flex-col bg-red-200">
    </Resizable.Pane>
  </Resizable.PaneGroup>
</main>