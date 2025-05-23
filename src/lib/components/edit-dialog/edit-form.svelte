<!--
Edit form for (most) objects in our model.
Accepts a generic value `T` and upcasts it to display the right edit fields.
Used inside EditDialog.
-->

<script lang="ts" generics="T">
  import { DatePicker } from "$lib/components/date-picker";
  import PropertiesInput from "$lib/components/property/properties-input.svelte";
  import { Label } from "$lib/components/ui/label";
  import { state as GLOBAL_STATE } from "$lib/model";
  import { AssignmentPattern, Location, Person, Shift, WithProperties } from "$lib/model/core";
  import { isDisplay } from "$lib/ui";
  import DisplayEditForm from "./display-edit-form.svelte";
  import EditAssignmentPattern from "./edit-assignment-pattern.svelte";
  import EditLocation from "./edit-location.svelte";
  import EditShift from "./edit-shift.svelte";

  export let item: T | undefined;
  export let state = GLOBAL_STATE;
  let className = "";

  const locations = state.locations;

  export { className as class };
</script>

<div
  class="mb-4 mt-4 flex h-full max-h-[60vh] w-full flex-col gap-6 overflow-y-scroll p-1 {className}"
>
  <!-- For all objects that implement `Display`, show a basic form (name / description / image) -->
  {#if isDisplay(item)}
    <DisplayEditForm bind:item />
  {/if}
  <!-- For Person objects, show a DOB picker. Should be turned into a dynamic property in the future. -->
  {#if item instanceof Person}
    <div class="flex w-full flex-col gap-1.5">
      <Label class="font-semibold" for="birthday">Date of Birth</Label>
      <DatePicker id="birthday" class="w-full" bind:value={item.dob} />
    </div>
  {/if}
  <!-- Display fields for user-defined dynamic properties -->
  {#if item instanceof WithProperties}
    <PropertiesInput properties={item.properties} />
  {/if}
  <!-- Edit forms for specific data types (see corresponding files in this directory) -->
  {#if item instanceof Location}
    <EditLocation {item} locations={$locations} />
  {:else if item instanceof AssignmentPattern}
    <EditAssignmentPattern bind:item />
  {:else if item instanceof Shift}
    <EditShift bind:item />
  {/if}
  <slot {item} />
</div>
