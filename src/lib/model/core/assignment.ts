import { TimeSlot } from "$lib/model/temporal";
import { Icon, type Display } from "$lib/ui";
import { copyArr } from "$lib/utils";
import { CalendarDate, parseDate, type DateValue } from "@internationalized/date";
import { get as _get } from "svelte/store";
import type { JsonObject, JsonValue } from "type-fest";
import { Base } from "./base";
import { Location } from "./location";
import { Person } from "./person";
import { Shift } from "./shift";
import { State } from "./state";
import { Task } from "./task";

export enum AssignmentType {
  SIMPLE = "simple",
  DAY_OFF = "day_off",
}

export interface IAssignment extends Display {
  type: AssignmentType;
  person?: Person;
  timeslot?: TimeSlot;
  shift?: Shift;
  date?: CalendarDate;
  location?: Location;
  task?: Task;
}

export class Assignment extends Base implements IAssignment {
  readonly type: AssignmentType;
  name: string;
  description: string;
  icon?: Icon;
  private _person?: Person;
  private _timeslot?: TimeSlot;
  private _shift?: Shift;
  private _date?: CalendarDate;
  private _location?: Location;
  private _task?: Task;

  constructor(
    props: Partial<IAssignment> & { type: AssignmentType },
    state?: State,
    uuid?: string,
  ) {
    super(state, uuid);

    this.type = props.type;
    this.name = props.name || "";
    this.description = props.description || "";
    this.icon = props.icon;
    this._person = props.person?.copy();
    this._timeslot = props.timeslot?.copy();
    this._shift = props.shift?.copy();
    this._date = props.date?.copy();
    this._location = props.location?.copy();
    this._task = props.task?.copy();
  }

  /**
   * Create a new day off assignment
   * @param person Person taking the day off
   * @param date Date
   * @param state State to bind the Assignment to
   * @returns new Assignment object
   */
  static dayOff(person: Person, date: CalendarDate, state?: State): Assignment {
    return new Assignment({
      type: AssignmentType.DAY_OFF,
      name: "Day Off",
      description: `${person.name} is taking a day off on this date`,
      icon: Icon.fromString("lucide:calendar-off"),
      person,
      date
    }, state)
  }

  /**
   * Get an assignment by UUID (by copy)
   * @param from State or array of assignments
   * @param uuid UUID of the assignment to get
   * @returns Assignment with the given UUID or undefined if not found
   */
  static get(from: State | Assignment[], uuid: string): Assignment | undefined {
    if (from instanceof State) {
      return from.get(uuid) as Assignment | undefined;
    }
    return from.find((assignment) => assignment.uuid === uuid)?.copy();
  }

  /**
   * Get all assignments (by copy)
   * @param from State or array of assignments
   * @returns Array of assignments
   */
  static getAll(from: State | Assignment[]): Assignment[] {
    if (from instanceof State) {
      return copyArr(Array.from(_get(from._assignments).values()));
    }
    return copyArr(from);
  }

  /**
   * Get all assignments for a given person.
   * @param from State or array of assignments
   * @param person Person to check
   * @returns Array of assignments for the given person
   */
  static getForPerson(from: State | Assignment[], person: Person): Assignment[] {
    return Assignment.getAll(from).filter((a) => a.person?.eq(person));
  }

  static getByLocation(from: State | Assignment[], location: Location): Assignment[] {
    return Assignment.getAll(from).filter((assignment) => {
      return assignment.location?.eq(location);
    });
  }

  /**
   * Get all assignments that fall entirely within a given time slot.
   * @param from State or array of assignments
   * @param time Time slot to check
   * @returns Array of assignments that fall entirely within the given time slot
   */
  static getDuring(from: State | Assignment[], time: TimeSlot): Assignment[] {
    return Assignment.getAll(from).filter((a) => a.timeslot && time.includes(a.timeslot));
  }

  /**
   * Get all assignments that intersect with a given time slot.
   * @param from State or array of assignments
   * @param time Time slot to check
   * @returns Array of assignments that intersect with the given time slot
   */
  static getIntersecting(from: State | Assignment[], time: TimeSlot): Assignment[] {
    return Assignment.getAll(from).filter((a) => a.timeslot && time.intersects(a.timeslot));
  }

  /**
   * Get all assignments that occur between two dates.
   * @param from State or array of assignments
   * @param after Start date (inclusive). If undefined, there is no lower bound.
   * @param before End date (inclusive). If undefined, there is no upper bound.
   * @returns Array of assignments that occur between the two dates
   */
  static getBetween(
    from: State | Assignment[],
    after?: DateValue,
    before?: DateValue,
  ): Assignment[] {
    return Assignment.getAll(from).filter((assignment) => {
      if (!assignment.timeslot) return false;
      let ans = true;
      ans = ans && (!after || assignment.timeslot.start.compare(after) >= 0);
      ans = ans && (!before || assignment.timeslot.end.compare(before) <= 0);
      return ans;
    });
  }

  /**
   * Get all assignments that are active on a given date.
   * @param from State or array of assignments
   * @param date Date to check
   * @param strict If true, return assignments that start and end on the given date. If false, return assignments that occur at any point on the given date. Default is false.
   * @returns Array of assignments that are active on the given date
   */
  static getOn(from: State | Assignment[], date: DateValue, strict = false): Assignment[] {
    if (strict) {
      return Assignment.getDuring(from, TimeSlot.allDay(date));
    } else {
      return Assignment.getIntersecting(from, TimeSlot.allDay(date));
    }
  }

  /**
   * Create a copy of this assignment.
   */
  copy(): Assignment {
    return new Assignment(
      {
        type: this.type,
        name: this.name,
        description: this.description,
        icon: this.icon?.copy(),
        person: this._person?.copy(),
        timeslot: this._timeslot?.copy(),
        date: this._date?.copy(),
        shift: this._shift?.copy(),
        location: this.location?.copy(),
        task: this._task?.copy(),
      },
      this.state,
      this.uuid,
    );
  }

  /**
   * Get the time slot that this assignment covers.
   */
  get timeslot(): TimeSlot | undefined {
    return this._timeslot;
  }

  set timeslot(timeslot: TimeSlot | undefined) {
    this._timeslot = timeslot?.copy();
  }

  get date(): CalendarDate | undefined {
    return this._date;
  }

  set date(date: CalendarDate | undefined) {
    this._date = date?.copy();
  }

  get location(): Location | undefined {
    return this._location?.get() as Location | undefined;
  }

  set location(location: Location | undefined) {
    this._location = location?.copy();
  }

  get person(): Person | undefined {
    return this._person?.get() as Person | undefined;
  }

  set person(person: Person | undefined) {
    this._person = person?.copy();
  }

  get task(): Task | undefined {
    return this._task?.get() as Task | undefined;
  }

  set task(task: Task | undefined) {
    this._task = task?.copy();
  }

  get shift(): Shift | undefined {
    return this._shift?.get() as Shift | undefined;
  }

  set shift(shift: Shift | undefined) {
    this._shift = shift?.copy();
  }

  toJSON(): JsonObject {
    return {
      uuid: this.uuid,
      name: this.name,
      description: this.description || "",
      icon: this.icon?.toJSON() || null,
      person: this._person?.toJSON() || null,
      date: this._date?.toString() || null,
      location: this._location?.toJSON() || null,
      shift: this._shift?.toJSON() || null,
      task: this._task?.toJSON() || null,
      timeslot: this._timeslot?.toJSON() || null,
      type: this.type,
    };
  }

  static fromJSON(json: JsonValue, state?: State): Assignment {
    const obj = json as JsonObject;
    return new Assignment(
      {
        type: obj["type"] as AssignmentType,
        name: obj["name"] as string,
        description: obj["description"] as string,
        icon: obj["icon"] ? Icon.fromJSON(obj["icon"] as JsonObject) : undefined,
        person: obj["person"] ? Person.fromJSON(obj["person"] as JsonObject) : undefined,
        location: obj["location"] ? Location.fromJSON(obj["location"] as JsonObject) : undefined,
        shift: obj["shift"] ? Shift.fromJSON(obj["shift"] as JsonObject) : undefined,
        timeslot: obj["timeslot"] ? TimeSlot.fromJSON(obj["timeslot"] as JsonObject) : undefined,
        task: obj["task"] ? Task.fromJSON(obj["task"] as JsonObject) : undefined,
        date: obj["date"] ? parseDate(obj["date"] as string) : undefined,
      },
      state,
      obj["uuid"] ? (obj["uuid"] as string) : undefined,
    );
  }
}
