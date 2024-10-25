import {
  CalendarDate,
  CalendarDateTime,
  getLocalTimeZone,
  parseZonedDateTime,
  toCalendarDate,
  toZoned,
  ZonedDateTime,
  type TimeDuration
} from "@internationalized/date";
import type { JsonObject } from "type-fest";
import type { Copy } from "../utils";
import { dtMax, dtMin } from "./utils";

/**
 * Represents a time period during which an event occurs.
 */
export class TimeSlot implements Copy<TimeSlot> {
  /**
   * End date & time of the time slot.
   */
  readonly end: ZonedDateTime;
  /**
   * Start date & time of the time slot.
   */
  readonly start: ZonedDateTime;

  /**
   * Create a new time slot object.
   * @param start Start date & time of the time slot.
   * @param end End date & time of the time slot.
   */
  constructor(start: ZonedDateTime, end: ZonedDateTime) {
    this.start = start;
    this.end = end;
  }

  /**
   * Get a time slot that spans the entire day of a given date.
   * @param date Date to get the time slot for. Can be an instance of `CalendarDate`, `CalendarDateTime`, or `ZonedDateTime`.
   * @param tzid For `CalendarDate` objects, the timezone ID to use. Defaults to the local timezone.
   * @returns TimeSlot object representing the entire day of the given date.
   */
  static allDay(date: CalendarDate | CalendarDateTime | ZonedDateTime, tzid?: string): TimeSlot {
    if (date instanceof ZonedDateTime) {
      return new TimeSlot(
        date.set({ hour: 0, minute: 0, second: 0 }),
        date.set({ hour: 23, minute: 59, second: 59 })
      );
    }
    const start = toZoned(date, tzid || getLocalTimeZone()).set({ hour: 0, minute: 0, second: 0 });
    const end = start.set({ hour: 23, minute: 59, second: 59 });
    return new TimeSlot(start, end);
  }

  /**
   * Deserialize a JSON object to a TimeSlot object.
   * @param json JSON object to deserialize
   * @returns TimeSlot object, or undefined if the JSON object is invalid
   */
  static fromJSON(json: JsonObject): TimeSlot | undefined {
    if (typeof json.start !== "string" || typeof json.end !== "string") return undefined;

    try {
      const start = parseZonedDateTime(json.start);
      const end = parseZonedDateTime(json.end);
      return new TimeSlot(start, end);
    } catch {
      return undefined;
    }
  }

  /**
   * Serialize the time slot to a JSON object.
   * @returns The JSON object representing the time slot
   */
  toJSON(): JsonObject {
    return {
      start: this.start.toString(),
      end: this.end.toString()
    };
  }

  /**
   * Create a deep copy of the time slot object.
   */
  copy(): TimeSlot {
    return new TimeSlot(this.start, this.end);
  }

  /**
   * Check if this time slot clashes with another time slot.
   * @param other time slot to check against
   * @returns True if the time slots clash, false otherwise
   */
  intersects(other: TimeSlot): boolean {
    return this.start.compare(other.end) < 0 && this.end.compare(other.start) > 0;
  }

  /**
   * Get the time period during which this time slot clashes with another time slot.
   * @param other time slot to check against
   * @returns An time slot object representing the time period during which the time slots clash, or undefined if they do not clash
   */
  intersect(other: TimeSlot): TimeSlot | undefined {
    if (this.intersects(other)) {
      const start = dtMax(this.start, other.start);
      const end = dtMin(this.end, other.end);
      return new TimeSlot(start, end);
    }

    return undefined;
  }

  /**
   * Get the parts of this time slot that are not covered by another time slot.
   * @param other Time slot to compare against
   * @returns Array of TimeSlot objects
   */
  except(other: TimeSlot): TimeSlot[] {
    const clash = this.intersect(other);
    if (!clash) return [this.copy()];

    const ans: TimeSlot[] = [];
    if (this.start.compare(clash.start) < 0) {
      ans.push(new TimeSlot(this.start, clash.start));
    }
    if (this.end.compare(clash.end) > 0) {
      ans.push(new TimeSlot(clash.end, this.end));
    }
    return ans;
  }

  /**
   * Get the dates that this time slot spans.
   * @returns An Array of CalendarDate objects representing the dates that this time slot spans
   */
  getDates(): CalendarDate[] {
    let start = toCalendarDate(this.start);
    const end = toCalendarDate(this.end);

    const dates: CalendarDate[] = [start.copy()];

    while (start.compare(end) < 0) {
      start = start.add({ days: 1 });
      dates.push(start.copy());
    }

    return dates;
  }

  /**
   * Check if the event will be occurring at a given date & time.
   * @param zdt Date & time to check
   * @returns true if the event will be occurring at the given date & time, false otherwise
   */
  includes(zdt: ZonedDateTime) {
    return this.end.compare(zdt) >= 0 && this.start.compare(zdt) <= 0;
  }

  /**
   * Return a new TimeSlot object with the start and end times offset by a given duration.
   * @param by Duration by which to offset the time slot
   * @returns New TimeSlot object with the start and end times offset by the given duration
   */
  offset(by: TimeDuration): TimeSlot {
    return new TimeSlot(this.start.add(by), this.end.add(by));
  }

  /**
   * Get the duration of the time slot.
   * @returns Duration of the time slot.
   */
  get duration(): TimeDuration {
    const millis = this.end.toDate().valueOf() - this.start.toDate().valueOf();
    return {
      hours: Math.floor(millis / (1000 * 60 * 60)),
      minutes: Math.floor((millis / (1000 * 60)) % 60),
      seconds: Math.floor((millis / 1000) % 60)
    };
  }
}
