import { ZonedDateTime } from "@internationalized/date";
import type { Task } from "$lib/types/task.ts";
import type { Person } from "$lib/types/person.ts";
import type { Location } from "$lib/types/location.ts";
import { v4 as uuidv4 } from "uuid";

export interface ShiftProps {
  name: string;
  description: string;
  start_date_time: ZonedDateTime;
  end_date_time: ZonedDateTime;
  location: Location;
  tasks: Task[];
}

export interface Shift extends ShiftProps {
  uuid: string;
}

export function createShift(props: ShiftProps): Shift {
  return {
    uuid: uuidv4(),
    ...props
  };
}

export function getPeopleForShift(shift: Shift): Person[] {
  return [...new Set(shift.tasks.flatMap((t) => t.people))];
}
