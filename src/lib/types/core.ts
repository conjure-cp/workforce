import { type DateValue, ZonedDateTime } from "@internationalized/date";

export interface Skill {
  name: string;
}

export interface Task {
  name: string;
  description: string;
  min_people: number;
  max_people: number;
  required_skills: Skill[];
}

export interface Location {
  name: string;
}

export interface Shift {
  name: string;
  description: string;
  start_date_time: ZonedDateTime;
  end_date_time: ZonedDateTime;
  location: Location;
  tasks: Task[];
}

export interface Person {
  name: string;
  job_title: string;
  birthday: DateValue;
  skills: Skill[];
}
