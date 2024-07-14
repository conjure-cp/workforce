import { type Writable, writable } from "svelte/store";
import type { Location, Person, Task } from "$lib/types/core.ts";
import type { Constraint } from "$lib/types/constraints.ts";

export const employees: Writable<Person[]> = writable([]);
export const locations: Writable<Location[]> = writable([]);
export const tasks: Writable<Task[]> = writable([]);
export const constraints: Writable<Constraint[]> = writable([]);
