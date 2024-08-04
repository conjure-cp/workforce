import { type Writable, writable } from "svelte/store";
import type { Skill } from "$lib/types/skill.ts";
import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import type { Task } from "$lib/types/task.ts";
import type { Shift } from "$lib/types/shift.ts";
import { appliesTo, type Constraint } from "$lib/types/constraints.ts";

export const skills: Writable<Skill[]> = writable([]);
export const employees: Writable<Person[]> = writable([]);
export const locations: Writable<Location[]> = writable([]);
export const tasks: Writable<Task[]> = writable([]);
export const constraints: Writable<Constraint[]> = writable([]);
export const shifts: Writable<Shift[]> = writable([]);

export function deleteEmployee(employee: Person) {
  tasks.update((list) =>
    list.map((t) => {
      t.people = t.people.filter((p) => p.uuid !== employee.uuid);
      return t;
    })
  );
  constraints.update((list) => list.filter((c) => !appliesTo(c, employee)));
  employees.update((list) => list.filter((e) => e.uuid !== employee.uuid));
}
