import { type Writable, writable } from "svelte/store";
import { type Location, type Person, type Shift, Skill, type Task } from "$lib/types/core.ts";
import type { Constraint } from "$lib/types/constraints.ts";

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
  constraints.update((list) =>
    list
      .filter((c) => c.applies_to.uuid !== employee.uuid)
      .map((c) => {
        if (c.type === "NoPeople") {
          c.people = c.people.filter((p) => p.uuid !== employee.uuid);
        }
        return c;
      })
  );
  employees.update((list) => list.filter((e) => e.uuid !== employee.uuid));
}
