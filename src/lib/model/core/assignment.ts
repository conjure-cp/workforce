import {
  CalendarDate,
  getLocalTimeZone,
  now,
  toZoned,
  ZonedDateTime
} from "@internationalized/date";
import { get as _get } from "svelte/store";
import type { JsonObject, JsonValue } from "type-fest";
import { TimeSlot } from "../temporal";
import { copyArr, has, without } from "../utils";
import { Base } from "./base";
import { Location } from "./location";
import { revivedArr } from "./misc";
import { Person } from "./person";
import type { Shift } from "./shift";
import { State } from "./state";
import { Task } from "./task";

type WithArg = Task | Location | Person | Person[];

/**
 * Represents an assignment of people to a task at a location during a time slot.
 * @interface
 * @property {TimeSlot} time Time slot of the assignment.
 * @property {Person[]} people People assigned to the task.
 * @property {Location} location Location of the assignment.
 * @property {Task} task Task of the assignment.
 * @see TimeSlot
 * @see Person
 * @see Location
 * @see Task
 */
interface IAssignment {
  time: TimeSlot;
  people: Person[];
  location?: Location;
  task?: Task;
  shift?: Shift;
}

/**
 * Represents an assignment of people to a task at a location during a time slot.
 */
export class Assignment extends Base implements IAssignment {
  time: TimeSlot;
  private _people: Person[] = [];
  private _location?: Location;
  private _task?: Task;
  private _shift?: Shift;

  /**
   * Create a new `Assignment` instance.
   * @param props Properties of the assignment.
   * @param state State to bind the assignment to.
   * @param uuid UUID of the assignment. If not provided, a new UUID is generated.
   * @see IAssignment
   */
  constructor(props: Partial<IAssignment>, state?: State, uuid?: string) {
    super(state, uuid);
    const dtNow = now(getLocalTimeZone());
    this.time = props.time || new TimeSlot(dtNow, dtNow.add({ hours: 1 }));
    this._people = props.people || [];
    this._location = props.location;
    this._task = props.task;
    this._shift = props.shift;
  }

  /**
   * Get an assignment by UUID from a state or array of assignments.
   * @param from State or array of assignments to search.
   * @param uuid UUID of the assignment to get.
   * @returns Assignment with the specified UUID, or undefined if not found.
   */
  static get(from: State | Assignment[], uuid: string): Assignment | undefined {
    if (from instanceof State) {
      return _get(from._assignments).get(uuid)?.copy();
    }
    return from.find((assignment) => assignment.uuid === uuid)?.copy();
  }

  /**
   * Get all assignments from the state.
   * @param from State or array of `Assignment`s to get assignments from.
   * @returns Array of assignments.
   */
  static getAll(from: State | Assignment[]): Assignment[] {
    if (from instanceof State) {
      return copyArr(Array.from(_get(from._assignments).values()));
    }
    return copyArr(from);
  }

  /**
   * Get all assignments that intersect with the given time slot.
   * @param from State or array of `Assignment`s to get assignments from.
   * @param time A time slot to check for intersections.
   * @returns Array of assignments that intersect with the given time slot.
   */
  static getDuring(from: State | Assignment[], time: TimeSlot): Assignment[] {
    return Assignment.getAll(from).filter((assignment) => assignment.time.intersects(time));
  }

  /**
   * Get all assignments that start after a given time and end before another given time.
   * @param from State or array of `Assignment`s to get assignments from.
   * @param start Start time. If not provided, all assignments that end before the end time are returned.
   * @param end End time. If not provided, all assignments that start after the start time are returned.
   * @returns Array of assignments that start after the start time and end before the end time.
   */
  static getBetween(
    from: State | Assignment[],
    start?: ZonedDateTime,
    end?: ZonedDateTime
  ): Assignment[] {
    return Assignment.getAll(from).filter((assignment) => {
      let ans = true;
      ans = ans && (!start || assignment.time.start.compare(start) >= 0);
      ans = ans && (!end || assignment.time.end.compare(end) <= 0);
      return ans;
    });
  }

  /**
   * Get all assignments that occur on a given day.
   * @param from State or array of `Assignment`s to get assignments from.
   * @param day Day to check for assignments.
   * @param strict If true, get assignments that start and end on the given day. If false, get assignments that occur at any point during the day. Default is false.
   * @returns Array of assignments that occur on the given day.
   */
  static getOn(
    from: State | Assignment[],
    day: CalendarDate,
    strict: boolean = false
  ): Assignment[] {
    if (strict) {
      const zdt = toZoned(day, getLocalTimeZone());
      return Assignment.getBetween(
        from,
        zdt.set({ hour: 0, minute: 0, second: 0 }),
        zdt.add({ days: 1 }).set({ hour: 0, minute: 0, second: 0 })
      );
    }
    return Assignment.getDuring(from, TimeSlot.allDay(day));
  }

  /**
   * Get all assignments by people, location, task, or any combination thereof.
   * @param from State or array of `Assignment`s to get assignments from.
   * @param args Filter arguments. Can be a `Task`, `Location`, `Person`, or an array of `Person`s.
   * @returns
   */
  static getWith(from: State | Assignment[], ...args: WithArg[]): Assignment[] {
    let ans = Assignment.getAll(from);
    for (const arg of args) {
      if (arg instanceof Task) {
        ans = ans.filter((assignment) => assignment.task?.eq(arg));
      } else if (arg instanceof Location) {
        ans = ans.filter((assignment) => assignment.location?.eq(arg));
      } else if (arg instanceof Person) {
        ans = ans.filter((assignment) => has(assignment.people, arg));
      } else {
        ans = ans.filter((assignment) => arg.every((person) => has(assignment.people, person)));
      }
    }
    return ans;
  }

  /**
   * Get all assignments that satisfy a given predicate.
   * @param from State or array of `Assignment`s to get assignments from.
   * @param predicate Predicate function to filter assignments.
   * @returns Array of assignments that satisfy the predicate.
   */
  static getBy(
    from: State | Assignment[],
    predicate: (assignment: Assignment) => boolean
  ): Assignment[] {
    return Assignment.getAll(from).filter(predicate);
  }

  /**
   * Create a new `Assignment` from a JSON object.
   * @param json JSON object to create an `Assignment` from.
   * @param state State to use for reviving references.
   * @returns A new `Assignment` instance, bound to the given state.
   */
  static fromJSON(json: JsonValue, state?: State): Assignment {
    const { time, people, location, task, uuid } = json as JsonObject;

    return new Assignment(
      {
        time: TimeSlot.fromJSON(time as JsonObject),
        people: revivedArr(Person, people, state),
        location: location ? Location.fromJSON(location as JsonObject) : undefined,
        task: task ? Task.fromJSON(task as JsonObject) : undefined
      },
      state,
      typeof uuid === "string" ? uuid : undefined
    );
  }

  /**
   * Serialize the `Assignment` to a JSON object.
   * @returns JSON object representing the `Assignment`.
   */
  toJSON(): JsonObject {
    const ans: JsonObject = {
      uuid: this.uuid,
      time: this.time.toJSON(),
      people: this.people.map((person) => person.toJSON())
    };

    if (this.location) {
      ans.location = this.location.toJSON();
    }

    if (this.task) {
      ans.task = this.task.toJSON();
    }

    return ans;
  }

  /**
   * Create a new `Assignment` instance with the same data
   * @returns `Assignment` instance (copy of the original).
   */
  copy(): Assignment {
    return new Assignment(
      {
        time: this.time.copy(),
        people: copyArr(this._people),
        location: this._location ? this._location.copy() : undefined,
        task: this._task ? this._task.copy() : undefined
      },
      this.state,
      this.uuid
    );
  }

  /**
   * Put the assignment in the state.
   */
  put(): void {
    if (this.state) {
      this.state.put(this);

      this._people.forEach((p) => (p.state = this.state));
      if (this._location) this._location.state = this.state;
      if (this._task) this._task.state = this.state;

      this.people.forEach((p) => p.put());
      this.location?.put();
      this.task?.put();
    }
  }

  /**
   * Add a person to the assignment.
   * @param person Person to add.
   */
  addPerson(person: Person): void {
    if (!has(this._people, person)) {
      this._people.push(person);
    }
  }

  /**
   * Remove a person from the assignment.
   * @param person Person to remove.
   */
  removePerson(person: Person): void {
    if (has(this._people, person)) {
      this._people = without(this._people, person);
    }
  }

  /**
   * Get all locations that can be assigned to this assignment.
   * TODO: This should handle location availability in the future.
   * @returns Array of assignable locations.
   */
  getAssignableLocations(): Location[] {
    if (!this.state) {
      return [];
    }

    // ToDo: Update this when location availability is implemented.
    const locations = _get(this.state._locations).values();
    return Array.from(locations);
  }

  /**
   * Get all people that can be assigned to this assignment.
   * @returns Array of assignable people.
   */
  getAssignablePeople(): Person[] {
    if (!this.state || !this.task) {
      return [];
    }
    return Person.getWith(this.state, this.task.skills);
  }

  /**
   * Get the people assigned to the assignment.
   */
  get people(): Person[] {
    let ans = this._people;
    if (this.state) {
      ans = ans.map((p) => p.get()).filter((p) => p !== undefined) as Person[];
    }
    return copyArr(ans);
  }

  /**
   * Get the location of the assignment.
   */
  get location(): Location | undefined {
    return this._location?.copy() as Location | undefined;
  }

  /**
   * Get the task of the assignment.
   */
  get task(): Task | undefined {
    return this._task?.get()?.copy() as Task | undefined;
  }

  /**
   * Get the shift of the assignment.
   */
  get shift(): Shift | undefined {
    return this._shift?.get()?.copy() as Shift | undefined;
  }

  /**
   * Set the people assigned to the assignment.
   */
  set people(people: Person[]) {
    this._people = copyArr(people);
  }

  /**
   * Set the location of the assignment.
   */
  set location(location: Location | undefined) {
    this._location = location?.copy();
  }

  /**
   * Set the task of the assignment.
   */
  set task(task: Task | undefined) {
    this._task = task?.copy();
  }

  /**
   * Set the shift of the assignment.
   */
  set shift(shift: Shift | undefined) {
    this._shift = shift?.copy();
  }
}
