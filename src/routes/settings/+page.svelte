<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { skills, shifts, employees, locations, constraints, tasks } from "$lib/stores.ts";
  import {
    generateSkills,
    generatePeople,
    generateLocations,
    generateTasks,
    generateConstraints,
    generateShifts
  } from "$lib/testing.ts";
  import { SeparatorHorizontal } from "lucide-svelte";
</script>

<div class="flex flex-col gap-3 pl-6 pt-4">
  <Button on:click={() => {skills.set(generateSkills(5))}}>
    Generate skills
  </Button>
  <Button on:click={() => {locations.set(generateLocations(5))}}>
    Generate locations
  </Button>
  <Button on:click={() => {employees.set(generatePeople(5))}}>
    Generate employees
  </Button>
  <Button on:click={() => {tasks.set(generateTasks(5))}}>
    Generate tasks
  </Button>
  <Button on:click={() => {constraints.set(generateConstraints(5))}}>
    Generate constraints
  </Button>
  <Button on:click={() => {shifts.set(generateShifts(5))}}>
    Generate shifts
  </Button>

  <SeparatorHorizontal class="w-full" />

  <Button on:click={() => {skills.set([])}}>
    Clear skills
  </Button>
  <Button on:click={() => {locations.set([])}}>
    Clear locations
  </Button>
  <Button on:click={() => {employees.set([])}}>
    Clear employees
  </Button>
  <Button on:click={() => {tasks.set([])}}>
    Clear tasks
  </Button>
  <Button on:click={() => {constraints.set([])}}>
    Clear constraints
  </Button>
  <Button on:click={() => {shifts.set([])}}>
    Clear shifts
  </Button>
</div>