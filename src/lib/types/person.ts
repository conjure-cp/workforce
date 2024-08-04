import { getInitials } from "$lib/utils.ts";
import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
import { get } from "svelte/store";
import { constraints } from "$lib/stores";
import type { Skill } from "$lib/types/skill.ts";
import { v4 as uuidv4 } from "uuid";

export interface PersonProps {
  name: string;
  job_title: string;
  image_url: string;
  birthday: Date;
  skills: Skill[];
}

export interface Person extends PersonProps {
  uuid: string;
}

export function createPerson(props: PersonProps): Person {
  return {
    uuid: uuidv4(),
    ...props
  };
}

export function getInitialsForPerson(person: Person): string {
  return getInitials(person.name);
}

export function getAgeForPerson(person: Person): number {
  const today = new Date();
  return today.getFullYear() - person.birthday.getFullYear();
}
