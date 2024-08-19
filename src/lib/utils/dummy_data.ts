import type { Person, Skill, Task, Location, Shift } from "$lib/types";
import { faker } from "@faker-js/faker";
import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
import { constraints, employees, locations, tasks, shifts, skills } from "$lib/stores.ts";
import { get } from "svelte/store";
import type { IconType } from "$lib/types/ui.ts";
import { sample, sampleOne } from "$lib/utils/utils.ts";
import { createSkill } from "$lib/types/skill.ts";
import { createPerson } from "$lib/types/person.ts";
import { createTask } from "$lib/types/task.ts";
import { createLocation } from "$lib/types/location.ts";
import { createShift } from "$lib/types/shift.ts";
import { reverseGeocode } from "$lib/utils/osm.ts";

const ST_ANDREWS: [latitude: number, longitude: number] = [-2.799, 56.34039];

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

const LOCATION_WORDS = [
  "Office",
  "Warehouse",
  "Store",
  "Restaurant",
  "Factory",
  "Shop",
  "Ward",
  "Unit",
  "Department",
  "Room",
  "Lab",
  "Studio",
  "Lecture Hall",
  "Clinic"
];

const TASK_WORDS = [
  "Cleaning",
  "Front Desk",
  "Stocking",
  "Cooking",
  "Delivery",
  "Maintenance",
  "Security",
  "Customer Service",
  "Code Review",
  "Management",
  "Research",
  "Design",
  "Teaching",
  "Training",
  "Writing",
  "Editing",
  "Marketing",
  "Sales",
  "Support",
  "QA"
];

const TASK_SUFFIXES = [
  "Worker",
  "Staff",
  "Manager",
  "Supervisor",
  "Specialist",
  "Assistant",
  "Associate",
  "Consultant",
  "Analyst",
  "Engineer",
  "Technician"
];

const SHIFT_PREFIXES = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
  "Weekend",
  "Holiday",
  "Remote",
  "On-Site",
  "Training",
  "Emergency"
];

const LOCATION_SUFFIX_GENERATORS: (() => string)[] = [
  () => sampleOne(["A", "B", "C", "D", "E", "F"]) as string,
  () => faker.number.int({ min: 1, max: 100 }).toString()
];

const TASK_SUFFIX_GENERATORS: (() => string)[] = [
  () => sampleOne(TASK_SUFFIXES) as string,
  () => ""
];

const SHIFT_SUFFIX_GENERATORS: (() => string)[] = [
  () => sampleOne(["A", "B", "C", "D", "E", "F"]) as string,
  () => ""
];

export function generateLocationName(): string {
  const suffixGen = sampleOne(LOCATION_SUFFIX_GENERATORS) as () => string;
  return `${sampleOne(LOCATION_WORDS)} ${suffixGen()}`;
}

export function generateTaskName(): string {
  const suffixGen = sampleOne(TASK_SUFFIX_GENERATORS) as () => string;
  return `${sampleOne(TASK_WORDS)} ${suffixGen()}`;
}

export function generateShiftName(): string {
  const suffixGen = sampleOne(SHIFT_SUFFIX_GENERATORS) as () => string;
  return `${sampleOne(SHIFT_PREFIXES)} Shift ${suffixGen()}`;
}

export function generateIcon(): IconType {
  return {
    icon: ICONIFY_ICONS[Math.floor(Math.random() * ICONIFY_ICONS.length)],
    color: faker.color.rgb()
  };
}

export function generateSkill(): Skill {
  return createSkill({
    name: faker.hacker.ingverb(),
    description: faker.lorem.sentence(),
    icon: generateIcon()
  });
}

export function generateSkills(n: number): Skill[] {
  return Array.from({ length: n }, generateSkill);
}

export function generatePerson(): Person {
  return createPerson({
    name: faker.person.fullName(),
    job_title: faker.person.jobTitle(),
    image_url: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    skill_uuids: sampleSkills(faker.number.int({ min: 1, max: 3 })).map((s) => s.uuid)
  });
}

export function generatePeople(n: number): Person[] {
  return Array.from({ length: n }, generatePerson);
}

export function generateTask(): Task {
  return createTask({
    name: generateTaskName(),
    description: faker.lorem.sentence(),
    icon: generateIcon(),
    min_people: faker.number.int({ min: 1, max: 3 }),
    max_people: faker.number.int({ min: 3, max: 5 }),
    required_skill_uuids: sampleSkills(faker.number.int({ min: 0, max: 3 })).map((s) => s.uuid),
    people_uuids: samplePeople(faker.number.int({ min: 0, max: 3 })).map((p) => p.uuid)
  });
}

export function generateTasks(n: number): Task[] {
  return Array.from({ length: n }, generateTask);
}

export async function generateLocation(): Promise<Location> {
  const coordinates = faker.location.nearbyGPSCoordinate({
    origin: ST_ANDREWS,
    radius: 2,
    isMetric: true
  });

  const address =
    (await reverseGeocode(coordinates))?.display_name ?? faker.location.streetAddress();

  return createLocation({
    name: generateLocationName(),
    image_url: faker.image.url(),
    coordinates,
    address
  });
}

export async function generateLocations(n: number): Promise<Location[]> {
  return Promise.all(Array.from({ length: n }, generateLocation));
}

export async function generateShift(): Promise<Shift> {
  let loc = sampleLocation();
  if (loc === undefined) loc = await generateLocation();

  return createShift({
    name: generateShiftName(),
    description: faker.lorem.sentence(),
    start_date_time: faker.date.recent(),
    end_date_time: faker.date.soon(),
    location_uuid: loc.uuid,
    task_uuids: sampleTasks(faker.number.int({ min: 1, max: 3 })).map((t) => t.uuid)
  });
}

export function generateShifts(n: number): Promise<Shift[]> {
  return Promise.all(Array.from({ length: n }, generateShift));
}

export function samplePerson(): Person | undefined {
  return sampleOne(get(employees));
}

export function sampleTask(): Task | undefined {
  return sampleOne(get(tasks));
}

export function sampleLocation(): Location | undefined {
  return sampleOne(get(locations));
}

export function sampleSkill(): Skill | undefined {
  return sampleOne(get(skills));
}

export function sampleConstraint(): Constraint | undefined {
  return sampleOne(get(constraints));
}

export function sampleShift(): Shift | undefined {
  return sampleOne(get(shifts));
}

export function samplePeople(n: number, unique: boolean = true): Person[] {
  return sample(get(employees), n, unique);
}

export function sampleTasks(n: number, unique: boolean = true): Task[] {
  return sample(get(tasks), n, unique);
}

export function sampleLocations(n: number, unique: boolean = true): Location[] {
  return sample(get(locations), n, unique);
}

export function sampleConstraints(n: number, unique: boolean = true): Constraint[] {
  return sample(get(constraints), n, unique);
}

export function sampleShifts(n: number, unique: boolean = true): Shift[] {
  return sample(get(shifts), n, unique);
}

export function sampleSkills(n: number, unique: boolean = true): Skill[] {
  return sample(get(skills), n, unique);
}

export function generateConstraintForLocation(loc: Location): Constraint {
  const CONSTRAINT_GENERATORS: (() => Constraint)[] = [
    () => {
      return {
        type: ConstraintType.NoTask,
        task: sampleTask() as Task,
        applies_to: loc
      };
    },
    () => {
      return {
        type: ConstraintType.NoPerson,
        person: samplePerson() as Person,
        applies_to: loc
      };
    },
    () => {
      return {
        type: ConstraintType.NoLocation,
        location: loc,
        applies_to: sampleTask() as Task
      };
    },
    () => {
      return {
        type: ConstraintType.NoLocation,
        location: loc,
        applies_to: samplePerson() as Person
      };
    }
  ];

  const gen = sampleOne(CONSTRAINT_GENERATORS);
  if (gen === undefined) throw new Error("No constraint generator found");
  else return gen();
}

export function generateConstraintForTask(task: Task): Constraint {
  const CONSTRAINT_GENERATORS: (() => Constraint)[] = [
    () => {
      return {
        type: ConstraintType.NoTask,
        task: task,
        applies_to: sampleLocation() as Location
      };
    },
    () => {
      return {
        type: ConstraintType.NoTask,
        task: task,
        applies_to: samplePerson() as Person
      };
    },
    () => {
      return {
        type: ConstraintType.NoLocation,
        location: sampleLocation() as Location,
        applies_to: task
      };
    },
    () => {
      return {
        type: ConstraintType.NoPerson,
        person: samplePerson() as Person,
        applies_to: task
      };
    }
  ];

  const gen = sampleOne(CONSTRAINT_GENERATORS);
  if (gen === undefined) throw new Error("No constraint generator found");
  else return gen();
}

export function generateConstraintForPerson(person: Person): Constraint {
  const CONSTRAINT_GENERATORS: (() => Constraint)[] = [
    () => {
      return {
        type: ConstraintType.NoPerson,
        person: person,
        applies_to: sampleLocation() as Location
      };
    },
    () => {
      return {
        type: ConstraintType.NoPerson,
        person: person,
        applies_to: sampleTask() as Task
      };
    },
    () => {
      return {
        type: ConstraintType.NoLocation,
        location: sampleLocation() as Location,
        applies_to: person
      };
    },
    () => {
      return {
        type: ConstraintType.NoTask,
        task: sampleTask() as Task,
        applies_to: person
      };
    }
  ];

  const gen = sampleOne(CONSTRAINT_GENERATORS);
  if (gen === undefined) throw new Error("No constraint generator found");
  else return gen();
}

export function generateConstraintForRandomLocation(): Constraint | undefined {
  const loc = sampleLocation();
  if (loc === undefined) return undefined;
  return generateConstraintForLocation(loc);
}

export function generateConstraintForRandomTask(): Constraint | undefined {
  const task = sampleTask();
  if (task === undefined) return undefined;
  return generateConstraintForTask(task);
}

export function generateConstraintForRandomPerson(): Constraint | undefined {
  const person = samplePerson();
  if (person === undefined) return undefined;
  return generateConstraintForPerson(person);
}

export function generateConstraints(n: number): Constraint[] {
  const GENERATORS: (() => Constraint | undefined)[] = [
    generateConstraintForRandomLocation,
    generateConstraintForRandomTask,
    generateConstraintForRandomPerson
  ];

  return Array.from({ length: n }, () => {
    const gen = sampleOne(GENERATORS);
    if (gen === undefined) throw new Error("No constraint generator found");
    return gen();
  }).filter((c) => c !== undefined) as Constraint[];
}
