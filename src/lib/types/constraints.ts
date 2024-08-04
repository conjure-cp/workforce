// ToDo: Each constraint must contain an ical type to reflect the time when it applies
// ToDo: Discuss with Oz & add more constraints

import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import type { Task } from "$lib/types/task.ts";

export enum ConstraintType {
  NO_WORK_TOGETHER = "NO_WORK_TOGETHER",
  NO_PERSON_AT_LOCATION = "NO_PERSON_AT_LOCATION",
  NO_TASK_AT_LOCATION = "NO_TASK_AT_LOCATION",
  PERSON_CANNOT_DO_TASK = "PERSON_CANNOT_DO_TASK"
}

export type NoWorkTogetherConstraint = {
  type: ConstraintType.NO_WORK_TOGETHER;
  people: [Person, Person];
};

export type NoPersonAtLocationConstraint = {
  type: ConstraintType.NO_PERSON_AT_LOCATION;
  person: Person;
  location: Location;
};

export type NoTaskAtLocationConstraint = {
  type: ConstraintType.NO_TASK_AT_LOCATION;
  task: Task;
  location: Location;
};

export type PersonCannotDoTask = {
  type: ConstraintType.PERSON_CANNOT_DO_TASK;
  person: Person;
  task: Task;
};

export type Constraint =
  | NoWorkTogetherConstraint
  | NoPersonAtLocationConstraint
  | NoTaskAtLocationConstraint
  | PersonCannotDoTask;

export function appliesTo(constraint: Constraint, item: Person | Task | Location) {
  switch (constraint.type) {
    case ConstraintType.NO_WORK_TOGETHER:
      return constraint.people.map((p) => p.uuid).includes(item.uuid);
    case ConstraintType.NO_PERSON_AT_LOCATION:
      return constraint.person.uuid === item.uuid || constraint.location.uuid === item.uuid;
    case ConstraintType.NO_TASK_AT_LOCATION:
      return constraint.task.uuid === item.uuid || constraint.location.uuid === item.uuid;
    case ConstraintType.PERSON_CANNOT_DO_TASK:
      return constraint.person.uuid === item.uuid || constraint.task.uuid === item.uuid;
  }
}
