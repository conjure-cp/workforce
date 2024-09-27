import { get } from "svelte/store";
import type { JsonObject, JsonValue } from "type-fest";
import { Geopoint, type LngLat } from "../geocoding";
import { type Display } from "../ui";
import { copyArr } from "../utils";
import { Assignment } from "./assignment";
import { Base } from "./base";
import { State } from "./state";

/**
 * Represents the minimum and maximum number of people and tasks that can be assigned to a location.
 */
interface LocationMinMax {
  people: number;
  tasks: number;
}

/**
 * Represents a location where tasks can be performed.
 * @interface
 * @property {string} name - The name of the location.
 * @property {LocationMinMax} min - The minimum number of people and tasks that can be assigned to the location.
 * @property {LocationMinMax} max - The maximum number of people and tasks that can be assigned to the location.
 * @property {Geopoint} point - The geographical coordinates of the location.
 * @see LocationMinMax
 * @see Geopoint
 */
interface ILocation extends Display {
  name: string;
  description?: string;
  min: Partial<LocationMinMax>;
  max: Partial<LocationMinMax>;
  avatar?: URL;
  point?: Geopoint;
}

/**
 * Represents a location where tasks can be performed.
 */
export class Location extends Base implements ILocation {
  private _name: string;
  private _description?: string;
  private _min: LocationMinMax;
  private _max: LocationMinMax;
  private _point?: Geopoint;
  private _avatar?: URL;

  /**
   * Creates a new location.
   * @param props Properties of the location.
   * @param state State to bind the location to.
   * @param uuid UUID of the location. If not provided, a new UUID is generated.
   */
  constructor(props: Partial<ILocation>, state?: State, uuid?: string) {
    super(state, uuid);
    this._name = props.name || "";
    this._description = props.description || "";
    this._avatar = props.avatar;
    this._point = props.point instanceof Geopoint ? props.point : undefined;
    this._min = mkMin(props.min || {});
    this._max = mkMax(props.max || {});
  }

  /**
   * Get a location by UUID from a state or array of locations.
   * @param from State or array of locations to search.
   * @param uuid UUID of the location to get.
   * @returns Location with the specified UUID, or undefined if not found.
   */
  static get(from: State | Location[], uuid: string): Location | undefined {
    if (from instanceof State) {
      return get(from._locations).get(uuid)?.copy();
    }
    return from.find((location) => location.uuid === uuid)?.copy();
  }

  /**
   * Get all locations from a state
   * @param from State to get all locations from.
   * @returns Array of locations.
   */
  static getAll(from: State | Location[]): Location[] {
    if (from instanceof State) {
      return copyArr(Array.from(get(from._locations).values()));
    }
    return copyArr(from);
  }

  /**
   * Get locations within a certain radius of a point.
   * @param from State or array of locations to search.
   * @param point The point to search around. One of: `Location`, `Geopoint`, or `[longitude, latitude]`.
   * @param radius Search radius in meters.
   * @param accuracy Accuracy of the distance calculation in meters. Default is 1.
   * @returns Array of locations within the search radius. If `point` is not a valid location, an empty array is returned.
   * Note: `Location` objects without a valid point are also excluded from the result.
   */
  static getAround(
    from: State | Location[],
    point: Location | Geopoint | LngLat,
    radius: number,
    accuracy: number = 1
  ): Location[] {
    const coords =
      point instanceof Location
        ? point.point?.coords
        : point instanceof Geopoint
          ? point.coords
          : point;
    if (!coords) {
      return [];
    }

    const locations = Location.getAll(from);
    return locations.filter((location) => {
      const dst = location.point?.distanceTo(coords, accuracy);
      return dst !== undefined && dst <= radius;
    });
  }

  /**
   * Get locations that can accommodate a certain number of people and tasks.
   * @param from State or array of locations to search.
   * @param people Number of people to accommodate. If not provided, the number of people is not considered.
   * @param tasks Number of tasks to accommodate. If not provided, the number of tasks is not considered.
   * @returns Array of locations that can accommodate the specified number of people and tasks.
   */
  static getByCapacity(from: State | Location[], people?: number, tasks?: number): Location[] {
    const locations = Location.getAll(from);
    return locations.filter((location) => {
      const { min, max } = location;
      return (
        (!people || (people >= min.people && people <= max.people)) &&
        (!tasks || (tasks >= min.tasks && tasks <= max.tasks))
      );
    });
  }

  /**
   * Get locations that meet a predicate.
   * @param from State or array of locations to search.
   * @param filter Predicate function to filter locations.
   * @returns Array of locations that meet the predicate.
   */
  static getBy(from: State | Location[], filter: (location: Location) => boolean): Location[] {
    const locations = Location.getAll(from);
    return locations.filter(filter);
  }

  /**
   * Creates a new location from a JSON object.
   * @param json JSON object representing a location.
   * @param state State to bind the location to.
   * @returns new Location
   */
  static fromJSON(json: JsonValue, state?: State): Location {
    const { name, description, avatar, min, max, point, uuid } = json as JsonObject;

    return new Location(
      {
        name: name as string,
        description: description as string,
        avatar: avatar ? new URL(avatar as string) : undefined,
        point: point ? Geopoint.fromJSON(point as JsonObject) : undefined,
        min: mkMin(min as Partial<LocationMinMax>),
        max: mkMax(max as Partial<LocationMinMax>)
      },
      state,
      typeof uuid === "string" ? uuid : undefined
    );
  }

  /**
   * Serialize the location to a JSON object.
   * @returns JSON object representing the location.
   */
  toJSON(): JsonValue {
    const ans: JsonObject = {
      uuid: this.uuid,
      name: this._name,
      description: this._description || "",
      avatar: this._avatar?.href || null,
      min: this._min as unknown as JsonObject,
      max: this._max as unknown as JsonObject
    };

    if (this._point) {
      ans.point = this._point.toJSON();
    }

    return ans;
  }

  /**
   * Create a copy of the location.
   * @returns new Location with the same properties as the original.
   */
  copy(): Location {
    return new Location(
      {
        name: this._name,
        description: this._description,
        avatar: this._avatar,
        point: this._point,
        min: this._min,
        max: this._max
      },
      this._state,
      this.uuid
    );
  }

  /**
   * Update the location from the state.
   * @param force If true, local data is overwritten even if it is newer than the state. Default is false.
   * @returns True if the local state has been updated, false otherwise.
   */
  update(force: boolean = false): boolean {
    if (super.update(force)) {
      const location = this.get() as Location;
      this._name = location._name;
      this._description = location._description;
      this._avatar = location._avatar;
      this._point = location._point;
      this._min = location._min;
      this._max = location._max;
      return true;
    }
    return false;
  }

  /**
   * Get objects in the state that this location depends on.
   * @returns Array of dependencies. At the moment, it is always empty because locations do not depend on other objects.
   */
  dependencies(): Base[] {
    return [];
  }

  /**
   * Handle a dependency being removed from the state. At the moment, it does nothing because locations do not depend on other objects.
   */
  removeDependency(): void {}

  /**
   * Get assignments at this location.
   * @returns Array of assignments at the location.
   */
  getAssignments(): Assignment[] {
    if (!this._state) {
      return [];
    }
    return Assignment.getWith(this._state, this);
  }

  /**
   * Get the name of the location.
   */
  get name(): string {
    this.update();
    return this._name;
  }

  /**
   * Get the description of the location.
   */
  get description(): string | undefined {
    this.update();
    return this._description;
  }

  /**
   * Get the address and coordinates of the location.
   * @see Geopoint
   */
  get point(): Geopoint | undefined {
    this.update();
    return this._point;
  }

  /**
   * Get the minimum number of people and tasks that can be assigned to the location.
   * @see LocationMinMax
   */
  get min(): LocationMinMax {
    this.update();
    return this._min;
  }

  /**
   * Get the maximum number of people and tasks that can be assigned to the location.
   * @see LocationMinMax
   */
  get max(): LocationMinMax {
    this.update();
    return this._max;
  }

  /**
   * Get the URL of the avatar image for the location.
   */
  get avatar(): URL | undefined {
    this.update();
    return this._avatar;
  }

  /**
   * Set the name of the location.
   */
  set name(name: string) {
    this._name = name;
    this.touch();
  }

  /**
   * Set the description of the location.
   */
  set description(description: string | undefined) {
    this._description = description;
    this.touch();
  }

  /**
   * Set the coordinates of the location.
   */
  set point(point: Geopoint | undefined) {
    this._point = point;
    this.touch();
  }

  /**
   * Set the minimum number of people and tasks that can be assigned to the location.
   */
  set min(min: Partial<LocationMinMax>) {
    this._min = mkMin(min);
    this.touch();
  }

  /**
   * Set the maximum number of people and tasks that can be assigned to the location.
   */
  set max(max: Partial<LocationMinMax>) {
    this._max = mkMax(max);
    this.touch();
  }

  /**
   * Set the URL of the avatar image for the location.
   */
  set avatar(avatar: URL | undefined) {
    this._avatar = avatar;
    this.touch();
  }
}

/**
 * Helper function to create a `LocationMinMax` object for the minimum number of people and tasks.
 */
function mkMin(val: Partial<LocationMinMax>): LocationMinMax {
  return {
    people: val.people || 0,
    tasks: val.tasks || 0
  };
}

/**
 * Helper function to create a `LocationMinMax` object for the maximum number of people and tasks.
 */
function mkMax(val: Partial<LocationMinMax>): LocationMinMax {
  return {
    people: val.people || Infinity,
    tasks: val.tasks || Infinity
  };
}
