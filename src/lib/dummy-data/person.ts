import { Person, State } from "$lib/model";
import { faker } from "@faker-js/faker";
import { CalendarDate, fromDate, toCalendarDate } from "@internationalized/date";
import { get } from "svelte/store";
import { sample } from "./misc";
import { generateQualifications, sampleQualifications } from "./qualification";

function mkBirthday(): CalendarDate {
  const rawDate = faker.date.between({ from: new Date(1950, 0, 1), to: new Date(2000, 0, 1) });
  const zdt = fromDate(rawDate, "UTC");
  return toCalendarDate(zdt);
}

export function generatePerson(state?: State): Person {
  const qualifications = state ? sampleQualifications(state, 0, 3) : generateQualifications(0, 3);
  const name = faker.person.fullName();
  const role = faker.person.jobTitle();
  const birthday = mkBirthday();
  const avatar = new URL(faker.image.avatar());

  return new Person(
    {
      name,
      birthday,
      role,
      qualifications,
      avatar,
    },
    state,
  );
}

export function samplePeople(state: State, n: number, max?: number): Person[] {
  if (max && max > n) {
    n = faker.number.int({ min: n, max: max });
  }

  const people = get(state.people);
  let missing = n - people.length;

  while (missing > 0) {
    state.put(generatePerson(state));
    missing--;
  }

  return sample(get(state.people), n);
}

export function generatePeople(n: number, max?: number, state?: State): Person[] {
  if (max && max > n) {
    n = faker.number.int({ min: n, max: max });
  }

  return Array.from({ length: n }, () => generatePerson(state));
}
