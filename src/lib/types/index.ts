import type { Skill } from "$lib/types/skill.ts";
import type { Person, PersonProps } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import type { Task } from "$lib/types/task.ts";
import type { Shift } from "$lib/types/shift.ts";
import type { Constraint } from "$lib/types/constraints.ts";

export enum Type {
  Person = "Person",
  Location = "Location",
  Task = "Task",
  Shift = "Shift",
  Skill = "Skill"
}

export type { Skill, Person, Location, Task, Shift, PersonProps, Constraint };
