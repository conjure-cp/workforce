<script lang="ts">
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import PeopleList from "$lib/components/elements/person/people-list.svelte";
  import PeopleSelectorList from "$lib/components/elements/person/people-selector-list.svelte";
  import SkillBadge from "$lib/components/elements/skill/skill.svelte";
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import { employees } from "$lib/stores.ts";
  import { Task, Skill } from "$lib/types/core.ts";

  const schedules: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];

  const task: Task = new Task("Task 1", "Hello world!", "mdi:calendar", 2, 4, [], []);
  const skill: Skill = new Skill("Skill 1", "mdi:calendar");
</script>

<div class="w-full bg-gray-50">
  <main class="w-full flex flex-col gap-6 pl-6 pt-4">
    <h1 class="text-2xl font-semibold">Components playground</h1>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Combobox</h2>
      <Combobox options={schedules} placeholder="Select schedule..." icon="mdi:calendar" />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">People list</h2>
      <PeopleList people={$employees} compact={true} />
      <PeopleList people={$employees} compact={true} max={3} />
      <PeopleList people={$employees} compact={false} />
      <PeopleList people={$employees} compact={false} max={3} />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">People selector list</h2>
      <p>People selector list (compact)</p>
      <PeopleSelectorList people={task.people} min_people={task.min_people} max_people={task.max_people}
                          compact={true} />
      <p>People selector list (full)</p>
      <PeopleSelectorList people={task.people} min_people={task.min_people} max_people={task.max_people} />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Skills</h2>
      <SkillBadge skill={skill} />
      <SkillBadge skill={undefined} />
    </section>
  </main>
</div>