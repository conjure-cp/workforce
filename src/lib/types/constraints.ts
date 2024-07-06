import type { Location, Person } from "$lib/types/core.ts";
import type { Task } from "vitest";

export enum ConstraintType {
  no_locations,
  no_tasks,
  no_persons
}

export type NoLocationConstraint = {
  type: ConstraintType.no_locations;
  locations: Location[];
};

export type NoTasksConstraint = {
  type: ConstraintType.no_tasks;
  tasks: Task[];
};

export type NoPersonsConstraint = {
  type: ConstraintType.no_persons;
  persons: Person[];
};

export type Constraint = NoLocationConstraint | NoTasksConstraint | NoPersonsConstraint;
