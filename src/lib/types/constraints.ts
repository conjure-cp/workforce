import { Location, Person, Task } from "$lib/types/core.ts";

// ToDo: Each constraint must contain an ical type to reflect the time when it applies
// ToDo: Discuss with Oz & add more constraints

export enum ConstraintType {
  NoLocations = "NoLocations",
  NoTasks = "NoTasks",
  NoPeople = "NoPeople"
}

export type NoLocationsConstraint = {
  type: ConstraintType.NoLocations;
  locations: Location[];
  applies_to: Task | Person;
};

export type NoTasksConstraint = {
  type: ConstraintType.NoTasks;
  tasks: Task[];
  applies_to: Location | Person;
};

export type NoPeopleConstraint = {
  type: ConstraintType.NoPeople;
  people: Person[];
  applies_to: Person | Location | Task;
};

export type Constraint = NoLocationsConstraint | NoTasksConstraint | NoPeopleConstraint;
