import { ZonedDateTime } from "@internationalized/date";
import type { Constraint } from "$lib/types/constraints.ts";
import { constraints, employees, tasks } from "$lib/stores";
import { get } from "svelte/store";
import { v4 as uuidv4 } from "uuid";
import type { IconType } from "$lib/types/ui.ts";
import { getInitials } from "$lib/utils.ts";

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
    return employees_list.filter((p) => p.skills.map((s) => s.uuid).includes(this.uuid));
  }

  public get tasks(): Task[] {
    const tasks_list = get(tasks);
    return tasks_list.filter((t) => t.required_skills.map((s) => s.uuid).includes(this.uuid));
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
    return constraints_list.filter((c) => c.applies_to.uuid === this.uuid);
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
    return constraints_list.filter((c) => c.applies_to.uuid === this.uuid);
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

export interface PersonProps {
  name: string;
  job_title: string;
  image_url: string;
  birthday: Date;
  skills: Skill[];
}

export class Person {
  uuid: string;
  name: string;
  job_title: string;
  image_url: string;
  birthday: Date;
  skills: Skill[];

  public constructor(props: PersonProps | undefined) {
    this.uuid = uuidv4();
    this.name = "";
    this.job_title = "";
    this.image_url = "";
    this.birthday = new Date();
    this.skills = [];

    if (props === undefined) {
      return;
    }
    this.update(props);
  }

  public get initials(): string {
    return getInitials(this.name);
  }

  public get age(): number {
    const today = new Date();
    return today.getFullYear() - this.birthday.getFullYear();
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to.uuid === this.uuid);
  }

  public get props(): PersonProps {
    return {
      name: this.name,
      job_title: this.job_title,
      image_url: this.image_url,
      birthday: this.birthday,
      skills: this.skills
    };
  }

  public update(props: PersonProps): void {
    this.name = props.name;
    this.job_title = props.job_title;
    this.image_url = props.image_url;
    this.birthday = props.birthday;
    this.skills = props.skills;
  }
}
