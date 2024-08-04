<script lang="ts">
  import Combobox from "$lib/components/ui/combobox/combobox.svelte";
  import PeopleList from "$lib/components/elements/person/people-list.svelte";
  import PeopleSelectorList from "$lib/components/elements/person/people-selector-list.svelte";
  import SkillsList from "$lib/components/elements/skill/skills-list.svelte";
  import SkillsSelectorList from "$lib/components/elements/skill/skills-selector-list.svelte";
  import IconPicker from "$lib/components/elements/icon-picker/icon-picker.svelte";
  import TasksList from "$lib/components/elements/task/tasks-list.svelte";
  import ColourPicker from "$lib/components/ui/color-picker/color-picker.svelte";
  import PersonEditDialog from "$lib/components/elements/person/person-edit-dialog.svelte";
  import Chip from "$lib/components/ui/chip/chip.svelte";
  import type { ComboboxItem } from "$lib/components/ui/combobox";
  import { employees, tasks } from "$lib/stores.ts";
  import type { Task } from "$lib/types";
  import { skills } from "$lib/stores.ts";
  import { generateSkill, samplePerson } from "$lib/testing.ts";
  import { Button } from "$lib/components/ui/button";
  import { createTask } from "$lib/types/task.ts";
  import { GraduationCapIcon, PaletteIcon, XIcon } from "lucide-svelte";
  import { ChipSize, ChipVariant } from "$lib/components/ui/chip";
  import { faker } from "@faker-js/faker";

  const schedules: ComboboxItem[] = [
    { label: "Schedule 1", value: "schedule1" },
    { label: "Schedule 2", value: "schedule2" }
  ];

  const task: Task = createTask({
    name: "Task 1", description: "Hello world!", min_people: 2, max_people: 4, required_skills: [], people: [], icon: {
      icon: "mdi:calendar"
    }
  });
  let skill = generateSkill();
  let color = faker.color.rgb();
</script>

<div class="w-full h-dvh bg-gray-50 overflow-y-scroll">
  <main class="w-full flex flex-col gap-6 pl-6 pt-4">
    <h1 class="text-2xl font-semibold">Components playground</h1>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Chip</h2>
      <Chip />
      <Chip>
        <GraduationCapIcon slot="icon" />
      </Chip>
      <Chip>
        <GraduationCapIcon slot="icon" />
        <XIcon slot="hover_icon" />
      </Chip>
      <Chip>
        <GraduationCapIcon slot="icon" />
        Chip content
      </Chip>
      <Chip>
        <GraduationCapIcon slot="icon" />
        <XIcon slot="hover_icon" />
        Hover over me
        <svelte:fragment slot="hover">
          Hello world!
        </svelte:fragment>
      </Chip>
      <Chip variant={ChipVariant.color} {color}>
        <PaletteIcon slot="icon" />
        <XIcon slot="hover_icon" />
        Colour (default)
      </Chip>
      <Chip variant={ChipVariant.colorOutline} {color}>
        <PaletteIcon slot="icon" />
        <XIcon slot="hover_icon" />
        Colour (outline)
      </Chip>
      <Chip variant={ChipVariant.colorSolid} {color}>
        <PaletteIcon slot="icon" />
        <XIcon slot="hover_icon" />
        Colour (solid)
      </Chip>
      <Chip variant={ChipVariant.color} {color}>
        <PaletteIcon slot="icon" />
      </Chip>
      <Chip variant={ChipVariant.colorOutline} {color}>
        <PaletteIcon slot="icon" />
      </Chip>
      <Chip variant={ChipVariant.colorSolid} {color}>
        <PaletteIcon slot="icon" />
      </Chip>
      <Chip variant={ChipVariant.destructive} size={ChipSize.lg}>
        <GraduationCapIcon slot="icon" class="h-7 w-7" />
        <XIcon slot="hover_icon" class="h-7 w-7" />
        Chip content
      </Chip>
      <Chip variant={ChipVariant.outline} size={ChipSize.sm}>
        <GraduationCapIcon slot="icon" class="h-5 w-5" />
        <XIcon slot="hover_icon" class="h-5 w-5" />
        Chip content
      </Chip>

    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Combobox</h2>
      <Combobox options={schedules} placeholder="Select schedule..." icon={{ icon: "mdi:calendar" }} />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Icon Picker</h2>
      <IconPicker />
      <IconPicker bind:icon={skill.icon} />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Colour Picker</h2>
      <ColourPicker />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Person edit dialog</h2>
      <PersonEditDialog person={samplePerson()}>
        <Button>
          Edit employee
        </Button>
      </PersonEditDialog>
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
      <SkillsList skills={$skills} />
      <SkillsList skills={$skills} compact={false} />
      <SkillsSelectorList />
      <SkillsSelectorList n_skills={3} />
      <SkillsSelectorList compact={false} />
      <SkillsSelectorList n_skills={3} compact={false} />
    </section>
    <section class="w-full flex flex-col gap-3">
      <h2 class="text-xl">Task lists</h2>
      <TasksList tasks={$tasks} />
      <TasksList tasks={$tasks} compact={false} />
    </section>
  </main>
</div>