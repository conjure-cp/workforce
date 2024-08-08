// ToDo: Each constraint must contain an ical type to reflect the time when it applies
// ToDo: Discuss with Oz & add more constraints

import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import type { Task } from "$lib/types/task.ts";

export enum ConstraintType {
  NoPerson = "NoPerson",
  NoLocation = "NoLocation",
  NoTask = "NoTask"
}

export interface NoPersonConstraint {
  type: ConstraintType.NoPerson;
  applies_to: Person | Task | Location;
  person: Person;
}

export interface NoLocationConstraint {
  type: ConstraintType.NoLocation;
  applies_to: Person | Task;
  location: Location;
}

export interface NoTaskConstraint {
  type: ConstraintType.NoTask;
  applies_to: Person | Location;
  task: Task;
}

export type Constraint = NoPersonConstraint | NoLocationConstraint | NoTaskConstraint;
export type ConstraintOperand = Person | Location | Task;

export function getOperands(constraint: Constraint): ConstraintOperand[] {
  switch (constraint.type) {
    case ConstraintType.NoPerson:
      return [constraint.applies_to, constraint.person];
    case ConstraintType.NoLocation:
      return [constraint.applies_to, constraint.location];
    case ConstraintType.NoTask:
      return [constraint.applies_to, constraint.task];
  }
}

export function appliesTo(constraint: Constraint, item: ConstraintOperand): boolean {
  return getOperands(constraint)
    .map((o) => o.uuid)
    .includes(item.uuid);
}
