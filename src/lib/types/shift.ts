import { ZonedDateTime } from "@internationalized/date";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "$lib/types/task.ts";
import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";

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
