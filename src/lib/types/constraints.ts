import { Location, Person, Task } from "$lib/types/core.ts";

// ToDo: Each constraint must contain an ical type to reflect the time when it applies
// ToDo: Discuss with Oz & add more constraints

export type NoLocationsConstraint = {
  locations: Location[];
  applies_to: Task | Person;
  icon: string;
};

export type NoTasksConstraint = {
  tasks: Task[];
  applies_to: Location | Person;
  icon: string;
};

export type Constraint = NoLocationsConstraint | NoTasksConstraint;
