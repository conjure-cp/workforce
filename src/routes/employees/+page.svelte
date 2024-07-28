<!--suppress ES6UnusedImports -->
<script lang="ts">
  import EmployeesDataView from "$lib/components/elements/data-views/employees-data-view.svelte";
  import { SidebarPosition } from "$lib/components/ui/sidebar";
  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
  import SkillsSelectorList from "$lib/components/elements/skill/skills-selector-list.svelte";
  import * as Avatar from "$lib/components/ui/avatar";
  import type { Person } from "$lib/types/core.ts";
  import { samplePerson } from "$lib/testing.ts";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

  let person: Person | undefined = samplePerson();
</script>

<div class="bg-gray-50 w-full">
  <main class="w-full h-dvh p-4">
    <EmployeesDataView />
  </main>
</div>

{#if person === undefined}
  <Sidebar position={SidebarPosition.right} variant="justify-center" expandedWidth="150px">
    <p slot="expanded_main" class="text-center w-full text-muted-foreground">No employee selected</p>
  </Sidebar>
{:else }
  <Sidebar position={SidebarPosition.right} expandedWidth="380px" variant="justify-top">
    <h1 slot="expanded_top" class="text-2xl self-center font-semibold ml-auto mr-auto">
      Employee Details
    </h1>
    <svelte:fragment slot="expanded_main">
      <div class="flex flex-row justify-between items-end w-full">
        <Avatar.Root class="h-28 w-28">
          <Avatar.Image src={person.image_url} alt={person.name} />
          <Avatar.Fallback>{person.initials}</Avatar.Fallback>
        </Avatar.Root>
        <div class="flex flex-col h-full w-fit gap-2">
          <div>
            <Label for="employee_name" class="font-semibold mb-0.5">Name</Label>
            <Input type="text" id="employee_name" placeholder="Name" value={person.name} />
          </div>
          <div>
            <Label for="employee_job_title" class="font-semibold mb-0.5">Job Title</Label>
            <Input type="text" id="employee_job_title" placeholder="Job Title" value={person.job_title} />
          </div>
        </div>
      </div>
      <h2 class="text-xl font-semibold mt-8 ml-1">Skills:</h2>
      <SkillsSelectorList skills={person.skills} compact={false} class="mt-2 w-full" />
    </svelte:fragment>
  </Sidebar>
{/if}
