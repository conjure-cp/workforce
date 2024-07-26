import { ZonedDateTime } from "@internationalized/date";
import type { Constraint } from "$lib/types/constraints.ts";
import { constraints, employees, tasks } from "$lib/stores";
import { get } from "svelte/store";
import { v4 as uuidv4 } from "uuid";
import type { IconType } from "$lib/types/ui.ts";

export class Skill {
  uuid: string;
  name: string;
  description: string;
  icon: IconType;

  public constructor(name: string, description: string, icon: IconType) {
    this.uuid = uuidv4();
    this.name = name;
    this.description = description;
    this.icon = icon;
  }

  public get people(): Person[] {
    const employees_list = get(employees);
    return employees_list.filter((p) => p.skills.includes(this));
  }

  public get tasks(): Task[] {
    const tasks_list = get(tasks);
    return tasks_list.filter((t) => t.required_skills.includes(this));
  }
}

export class Task {
  uuid: string;
  name: string;
  description: string;
  icon: IconType;
  min_people: number;
  max_people: number;
  required_skills: Skill[];
  people: Person[];

  public constructor(
    name: string,
    description: string,
    icon: IconType,
    min_people: number,
    max_people: number,
    required_skills: Skill[],
    people: Person[]
  ) {
    this.uuid = uuidv4();
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.min_people = min_people;
    this.max_people = max_people;
    this.required_skills = required_skills;
    this.people = people;
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to === this);
  }
}

export type LngLat = [number, number];

export class Location {
  uuid: string;
  name: string;
  address: string;
  image_url: string;
  coordinates: LngLat;

  public constructor(name: string, full_address: string, image_url: string, coordinates: LngLat) {
    this.uuid = uuidv4();
    this.name = name;
    this.address = full_address;
    this.image_url = image_url;
    this.coordinates = coordinates;
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to === this);
  }
}

export class Shift {
  uuid: string;
  name: string;
  description: string;
  start_date_time: ZonedDateTime;
  end_date_time: ZonedDateTime;
  location: Location;
  tasks: Task[];

  public constructor(
    name: string,
    description: string,
    start_date_time: ZonedDateTime,
    end_date_time: ZonedDateTime,
    location: Location,
    tasks: Task[]
  ) {
    this.uuid = uuidv4();
    this.name = name;
    this.description = description;
    this.start_date_time = start_date_time;
    this.end_date_time = end_date_time;
    this.location = location;
    this.tasks = tasks;
  }

  public get start_time_fmt(): string {
    return this.start_date_time
      .toDate()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  public get end_time_fmt(): string {
    return this.end_date_time
      .toDate()
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  public get people(): Person[] {
    return [...new Set(this.tasks.flatMap((t) => t.people))];
  }
}

export class Person {
  uuid: string;
  name: string;
  job_title: string;
  image_url: string;
  birthday: Date;
  skills: Skill[];

  public constructor(
    name: string,
    job_title: string,
    image_url: string,
    birthday: Date,
    skills: Skill[]
  ) {
    this.uuid = uuidv4();
    this.name = name;
    this.job_title = job_title;
    this.image_url = image_url;
    this.birthday = birthday;
    this.skills = skills;
  }

  public get initials(): string {
    return this.name
      .split(" ")
      .map((n) => n[0].toUpperCase())
      .join("");
  }

  public get age(): number {
    const today = new Date();
    return today.getFullYear() - this.birthday.getFullYear();
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to === this);
  }
}
