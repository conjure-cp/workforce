import type { Location } from "$lib/types/core.ts";
import type { Task } from "vitest";

// ToDo: Each constraint must contain an ical type to reflect the time when it applies
// ToDo: Discuss with Oz & add more constraints

export enum ConstraintType {
  no_locations,
  no_tasks
}

export type NoLocationConstraint = {
  type: ConstraintType.no_locations;
  locations: Location[];
  icon: string;
};

export type NoTasksConstraint = {
  type: ConstraintType.no_tasks;
  tasks: Task[];
  icon: string;
};

// Constraints that apply to Locations
export type LocationConstraint = NoTasksConstraint;

// Constraints that apply to People
export type PersonConstraint = NoLocationConstraint | NoTasksConstraint;

// Constraints that apply to Tasks
export type TaskConstraint = NoLocationConstraint;

export type Constraint = LocationConstraint | PersonConstraint | TaskConstraint;
