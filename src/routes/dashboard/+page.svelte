<script lang="ts">
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import PeopleList from "$lib/components/elements/person/people-list.svelte";
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import { employees } from "$lib/stores.ts";

  const schedules: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];
</script>

<div class="w-full bg-gray-50">
  <main class="w-full flex flex-col gap-3 pl-6 pt-4">
    <h1>Components playground</h1>
    <section>
      <h2>Combobox</h2>
      <Combobox options={schedules} placeholder="Select schedule..." icon="mdi:calendar" />
    </section>
    <section>
      <PeopleList people={$employees} compact={true} />
      <PeopleList people={$employees} compact={true} max={3} />
      <PeopleList people={$employees} compact={false} />
      <PeopleList people={$employees} compact={false} max={3} />
    </section>
  </main>
</div>