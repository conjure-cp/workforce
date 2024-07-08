import { type DateValue, ZonedDateTime } from "@internationalized/date";
import type {
  LocationConstraint,
  PersonConstraint,
  TaskConstraint
} from "$lib/types/constraints.ts";

export interface Skill {
  name: string;
}

export interface Task {
  name: string;
  description: string;
  min_people: number;
  max_people: number;
  required_skills: Skill[];
  constraints: TaskConstraint[];
}

export interface Location {
  name: string;
  constraints: LocationConstraint[];
}

export interface Shift {
  name: string;
  description: string;
  start_date_time: ZonedDateTime;
  end_date_time: ZonedDateTime;
  location: Location;
  tasks: Task[];
}

export class Person {
  name: string;
  job_title: string;
  avatar_url: string;
  birthday: DateValue;
  skills: Skill[];
  constraints: PersonConstraint[];

  public constructor(
    name: string,
    job_title: string,
    avatar_url: string,
    birthday: DateValue,
    skills: Skill[],
    constraints: PersonConstraint[]
  ) {
    this.name = name;
    this.job_title = job_title;
    this.avatar_url = avatar_url;
    this.birthday = birthday;
    this.skills = skills;
    this.constraints = constraints;
  }

  public get initials(): string {
    return this.name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
  }

  public get age(): number {
    const today = new Date();
    return today.getFullYear() - this.birthday.year;
  }
}
