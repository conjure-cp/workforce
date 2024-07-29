<!--suppress ES6UnusedImports -->
<script lang="ts">
  import {
    Button
  } from "$lib/components/ui/button/index.js";
  import * as Dialog from "$lib/components/ui/dialog/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import SkillsSelectorList from "$lib/components/elements/skill/skills-selector-list.svelte";
  import * as Avatar from "$lib/components/ui/avatar/index.js";
  import { Person, type PersonProps } from "$lib/types/core.ts";
  import { UserCircleIcon } from "lucide-svelte";
  import { getInitials } from "$lib/utils.ts";

  let open: boolean = false;
  let onSubmit: (p: Person) => void = () => {
  };
  let personInput: Person | undefined = undefined;
  let person: PersonProps = personInput === undefined ? {
    name: "",
    job_title: "",
    skills: [],
    image_url: "",
    birthday: new Date()
  } : personInput.props;

  function handleSubmit() {
    if (personInput === undefined) {
      personInput = new Person(person);
    } else {
      personInput.update(person);
    }

    onSubmit(personInput);
    open = false;
  }

  export { open, onSubmit, personInput as person };
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger>
    <slot />
  </Dialog.Trigger>
  <Dialog.Content class="p-4">
    <Dialog.Header>
      <Dialog.Title class="font-semibold text-xl">Edit Employee Data</Dialog.Title>
      <Dialog.Description>
        Make changes to the employee profile here. Click save when you're done.
      </Dialog.Description>
    </Dialog.Header>
    <div class="flex flex-col w-full h-full gap-8 mt-4 mb-4 p-1 overflow-y-scroll max-h-[400px]">
      <div class="flex flex-row justify-between items-center gap-8 w-full">
        {#if person === undefined}
          <UserCircleIcon class="h-28 w-28 text-muted-foreground" />
        {:else}
          <Avatar.Root class="h-28 w-28">
            <Avatar.Image src={person.image_url} alt={person.name} />
            <Avatar.Fallback>{getInitials(person.name)}</Avatar.Fallback>
          </Avatar.Root>
        {/if}
        <div class="flex flex-col h-full w-full gap-2">
          <div>
            <Label for="employee_name" class="font-semibold mb-0.5">Name</Label>
            <Input type="text" id="employee_name" placeholder="Name" bind:value={person.name} />
          </div>
          <div>
            <Label for="employee_job_title" class="font-semibold mb-0.5">Job Title</Label>
            <Input type="text" id="employee_job_title" placeholder="Job Title" bind:value={person.job_title} />
          </div>
        </div>
      </div>
      <section>
        <h2 class="text-lg font-semibold">Skills:</h2>
        <SkillsSelectorList bind:skills={person.skills} compact={false} class="mt-2 w-full" />
      </section>
    </div>
    <Dialog.Footer>
      <Button type="submit" on:click={handleSubmit}>Save changes</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>