import { get } from "svelte/store";
import type { Skill } from "$lib/types/skill.ts";
import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import type { Task } from "$lib/types/task.ts";
import type { Shift } from "$lib/types/shift.ts";
import { appliesTo, type Constraint } from "$lib/types/constraints.ts";
import { persisted } from "svelte-persisted-store";
import * as devalue from "devalue";

export const skills = persisted<Skill[]>("skills", [], { serializer: devalue });
export const employees = persisted<Person[]>("employees", [], { serializer: devalue });
export const locations = persisted<Location[]>("locations", [], { serializer: devalue });
export const tasks = persisted<Task[]>("tasks", [], { serializer: devalue });
export const constraints = persisted<Constraint[]>("constraints", [], { serializer: devalue });
export const shifts = persisted<Shift[]>("shifts", [], { serializer: devalue });

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
