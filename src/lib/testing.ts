import { Person, Skill, Task, Location, Shift } from "$lib/types/core.ts";
import { fromDate } from "@internationalized/date";
import { faker } from "@faker-js/faker";
import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
import { constraints, employees, locations, tasks, shifts, skills } from "$lib/stores.ts";
import { get } from "svelte/store";

const ICONIFY_ICONS = [
  "mdi:account",
  "mdi:home",
  "mdi:bell",
  "mdi:camera",
  "mdi:cart",
  "mdi:chat",
  "mdi:cloud",
  "mdi:email",
  "mdi:heart",
  "mdi:lock",
  "mdi:map",
  "mdi:music",
  "mdi:phone",
  "mdi:settings",
  "mdi:star",
  "mdi:thumb-up",
  "mdi:weather-sunny",
  "mdi:calendar",
  "mdi:folder",
  "mdi:gift"
];

export function generateIcon(): string {
  return ICONIFY_ICONS[Math.floor(Math.random() * ICONIFY_ICONS.length)];
}

export function generateSkill(): Skill {
  return new Skill(faker.hacker.ingverb(), generateIcon());
}

export function generateSkills(n: number): Skill[] {
  return Array.from({ length: n }, generateSkill);
}

export function generatePerson(): Person {
  return new Person(
    faker.person.fullName(),
    faker.person.jobTitle(),
    faker.image.avatar(),
    faker.date.birthdate(),
    generateSkills(faker.number.int({ min: 1, max: 5 }))
  );
}

export function generatePeople(n: number): Person[] {
  return Array.from({ length: n }, generatePerson);
}

export function generateTask(): Task {
  return new Task(
    faker.lorem.words(),
    faker.lorem.sentence(),
    generateIcon(),
    faker.number.int({ min: 1, max: 3 }),
    faker.number.int({ min: 3, max: 5 }),
    sampleSkills(faker.number.int({ min: 0, max: 3 })),
    samplePeople(faker.number.int({ min: 0, max: 3 }))
  );
}

export function generateTasks(n: number): Task[] {
  return Array.from({ length: n }, generateTask);
}

export function generateLocation(): Location {
  return new Location(faker.location.streetAddress(), faker.image.url());
}

export function generateLocations(n: number): Location[] {
  return Array.from({ length: n }, generateLocation);
}

export function generateShift(): Shift {
  return new Shift(
    faker.lorem.words(),
    faker.lorem.sentence(),
    fromDate(faker.date.recent(), "UTC"),
    fromDate(faker.date.soon(), "UTC"),
    sampleLocation(),
    sampleTasks(faker.number.int({ min: 1, max: 3 }))
  );
}

export function generateShifts(n: number): Shift[] {
  return Array.from({ length: n }, generateShift);
}

export function samplePerson(): Person {
  return get(employees)[faker.number.int({ min: 0, max: get(employees).length - 1 })];
}

export function sampleTask(): Task {
  return get(tasks)[faker.number.int({ min: 0, max: get(tasks).length - 1 })];
}

export function sampleLocation(): Location {
  return get(locations)[faker.number.int({ min: 0, max: get(locations).length - 1 })];
}

export function sampleSkill(): Skill {
  return get(skills)[faker.number.int({ min: 0, max: get(skills).length - 1 })];
}

export function sampleConstraint(): Constraint {
  return get(constraints)[faker.number.int({ min: 0, max: get(constraints).length - 1 })];
}

export function sampleShift(): Shift {
  return get(shifts)[faker.number.int({ min: 0, max: get(shifts).length - 1 })];
}

export function samplePeople(n: number): Person[] {
  return Array.from({ length: n }, samplePerson);
}

export function sampleTasks(n: number): Task[] {
  return Array.from({ length: n }, sampleTask);
}

export function sampleLocations(n: number): Location[] {
  return Array.from({ length: n }, sampleLocation);
}

export function sampleConstraints(n: number): Constraint[] {
  return Array.from({ length: n }, sampleConstraint);
}

export function sampleShifts(n: number): Shift[] {
  return Array.from({ length: n }, sampleShift);
}

export function sampleSkills(n: number): Skill[] {
  return Array.from({ length: n }, sampleSkill);
}

export function generateConstraintForLocation(loc: Location): Constraint {
  const CONSTRAINT_GENERATORS: (() => Constraint)[] = [
    () => {
      return {
        type: ConstraintType.NoTasks,
        tasks: sampleTasks(faker.number.int({ min: 1, max: 5 })),
        applies_to: loc,
        icon: "mdi:clipboard"
      };
    }
  ];

  return CONSTRAINT_GENERATORS[
    faker.number.int({ min: 0, max: CONSTRAINT_GENERATORS.length - 1 })
  ]();
}

export function generateConstraintForTask(task: Task): Constraint {
  const CONSTRAINT_GENERATORS: (() => Constraint)[] = [
    () => {
      return {
        type: ConstraintType.NoLocations,
        locations: sampleLocations(faker.number.int({ min: 1, max: 5 })),
        applies_to: task,
        icon: "mdi:account"
      };
    }
  ];

  return CONSTRAINT_GENERATORS[
    faker.number.int({ min: 0, max: CONSTRAINT_GENERATORS.length - 1 })
  ]();
}

export function generateConstraintForPerson(person: Person): Constraint {
  const CONSTRAINT_GENERATORS: (() => Constraint)[] = [
    () => {
      return {
        type: ConstraintType.NoLocations,
        locations: sampleLocations(faker.number.int({ min: 1, max: 3 })),
        applies_to: person,
        icon: "mdi:map-marker"
      };
    },
    () => {
      return {
        type: ConstraintType.NoTasks,
        tasks: sampleTasks(faker.number.int({ min: 1, max: 3 })),
        applies_to: person,
        icon: "mdi:clipboard"
      };
    }
  ];

  return CONSTRAINT_GENERATORS[
    faker.number.int({ min: 0, max: CONSTRAINT_GENERATORS.length - 1 })
  ]();
}

export function generateConstraintForRandomLocation(): Constraint {
  return generateConstraintForLocation(sampleLocation());
}

export function generateConstraintForRandomTask(): Constraint {
  return generateConstraintForTask(sampleTask());
}

export function generateConstraintForRandomPerson(): Constraint {
  return generateConstraintForPerson(samplePerson());
}

export function generateConstraints(n: number): Constraint[] {
  const GENERATORS: (() => Constraint)[] = [
    generateConstraintForRandomLocation,
    generateConstraintForRandomTask,
    generateConstraintForRandomPerson
  ];

  return Array.from({ length: n }, () =>
    GENERATORS[faker.number.int({ min: 0, max: GENERATORS.length - 1 })]()
  );
}
