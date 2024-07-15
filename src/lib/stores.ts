import { type Writable, writable } from "svelte/store";
import { type Location, type Person, type Shift, Skill, type Task } from "$lib/types/core.ts";
import type { Constraint } from "$lib/types/constraints.ts";
import {
  generateConstraints,
  generateLocations,
  generatePeople,
  generateShifts,
  generateSkills,
  generateTasks
} from "$lib/testing.ts";

const N_SKILLS = 5;
const N_PEOPLE = 10;
const N_LOCATIONS = 3;
const N_TASKS = 10;
const N_CONSTRAINTS = 10;
const N_SHIFTS = 3;

export const skills: Writable<Skill[]> = writable(generateSkills(N_SKILLS));
export const employees: Writable<Person[]> = writable(generatePeople(N_PEOPLE));
export const locations: Writable<Location[]> = writable(generateLocations(N_LOCATIONS));
export const tasks: Writable<Task[]> = writable(generateTasks(N_TASKS));
export const constraints: Writable<Constraint[]> = writable(generateConstraints(N_CONSTRAINTS));
export const shifts: Writable<Shift[]> = writable(generateShifts(N_SHIFTS));
