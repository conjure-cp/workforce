import { Person, Skill, Task, Location, Shift } from "$lib/types/core.ts";
import { fromDate } from "@internationalized/date";
import { faker } from "@faker-js/faker";

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

export const SKILLS = generateSkillsRandom(20);
export const LOCATIONS = generateLocationsRandom(20);
export const PEOPLE = generatePeopleRandom(20);

export function generateIcon(): string {
  return ICONIFY_ICONS[Math.floor(Math.random() * ICONIFY_ICONS.length)];
}

export function generateSkillRandom(): Skill {
  return new Skill(faker.hacker.ingverb(), generateIcon());
}

export function generateSkillsRandom(n: number): Skill[] {
  return Array.from({ length: n }, generateSkillRandom);
}

export function generateSkill() {
  return SKILLS[Math.floor(Math.random() * SKILLS.length)];
}

export function generateSkills(n: number): Skill[] {
  return Array.from({ length: n }, generateSkill);
}

export function generatePersonRandom(): Person {
  return new Person(
    faker.person.fullName(),
    faker.person.jobTitle(),
    "https://thispersondoesnotexist.com/",
    faker.date.birthdate(),
    generateSkills(faker.number.int({ min: 1, max: 5 }))
  );
}

export function generatePeopleRandom(n: number): Person[] {
  return Array.from({ length: n }, generatePersonRandom);
}

export function generatePerson(): Person {
  return PEOPLE[Math.floor(Math.random() * PEOPLE.length)];
}

export function generatePeople(n: number): Person[] {
  return Array.from({ length: n }, generatePerson);
}

export function generateTask(): Task {
  return new Task(
    faker.lorem.words(),
    faker.lorem.sentence(),
    generateIcon(),
    faker.number.int({ min: 1, max: 5 }),
    faker.number.int({ min: 5, max: 10 }),
    generateSkills(faker.number.int({ min: 0, max: 3 })),
    []
  );
}

export function generateTasks(n: number): Task[] {
  return Array.from({ length: n }, generateTask);
}

export function generateLocationRandom(): Location {
  return new Location(faker.location.streetAddress(), faker.image.url());
}

export function generateLocationsRandom(n: number): Location[] {
  return Array.from({ length: n }, generateLocationRandom);
}

export function generateLocation(): Location {
  return LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
}

export function generateLocations(n: number): Location[] {
  return Array.from({ length: n }, generateLocation);
}

export function generateShift(): Shift {
  return new Shift(
    faker.lorem.words(),
    faker.lorem.sentence(),
    fromDate(faker.date.recent(), "UTC"),
    fromDate(faker.date.future(), "UTC"),
    generateLocation(),
    generateTasks(faker.number.int({ min: 1, max: 5 }))
  );
}
