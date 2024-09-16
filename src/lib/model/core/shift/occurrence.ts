import { TimeSlot } from "$lib/model/temporal";
import { eq, HashMap } from "$lib/model/utils";
import type { ZonedDateTime } from "@internationalized/date";
import { get } from "svelte/store";
import type { Assignment } from "../assignment";
import type { Shift } from "./shift";

export class ShiftOccurrence extends TimeSlot {
  readonly shift: Shift;

  constructor(start: ZonedDateTime, end: ZonedDateTime, shift: Shift) {
    super(start, end);
    this.shift = shift;
  }

  /**
   * Get the assignments that are scheduled to occur during this occurrence, and their time slots.
   * @returns A map of `Assignment`s to `TimeSlot`s, representing periods when the `Assignment` overlaps with this occurrence.
   */
  getAssignments(): HashMap<Assignment, TimeSlot> {
    const ans: HashMap<Assignment, TimeSlot> = new HashMap(undefined, undefined, eq);

    if (!this.shift.state) {
      return ans;
    }

    const assignments = get(this.shift.state.assignments).values();
    for (const assignment of assignments) {
      const clash = this.intersect(assignment.time);
      if (clash) {
        ans.set(assignment, clash);
      }
    }
    return ans;
  }
}
