import { get } from "svelte/store";
import type { Skill } from "$lib/types/skill.ts";
import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import type { Task } from "$lib/types/task.ts";
import type { Shift } from "$lib/types/shift.ts";
import { appliesTo, type Constraint } from "$lib/types/constraints.ts";
import { persisted } from "svelte-persisted-store";

export const skills = persisted<Skill[]>("skills", []);
export const employees = persisted<Person[]>("employees", []);
export const locations = persisted<Location[]>("locations", []);
export const tasks = persisted<Task[]>("tasks", []);
export const constraints = persisted<Constraint[]>("constraints", []);
export const shifts = persisted<Shift[]>("shifts", []);

export function getConstraintsFor(item: Person | Task | Location): Constraint[] {
  return get(constraints).filter((c) => appliesTo(c, item));
}

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
