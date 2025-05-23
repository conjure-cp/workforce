import { type Copy, type Eq } from "$lib/utils";
import type { JsonObject } from "type-fest";
import { v4 as uuidv4 } from "uuid";
import type { State } from "./state";

/**
 * Base class for all business logic objects in the application.
 * Provides methods for serialization, copying, and state management.
 *
 * Warning: to implement the commit / update semantics, objects are copied.
 * This means that the standard JS equality operator will not work as expected.
 * Use the `eq` method to compare objects.
 */
export abstract class Base implements Copy<Base>, Eq<Base> {
  private _uuid: string;
  state: State;

  constructor(state: State, uuid?: string) {
    this._uuid = uuid || uuidv4();
    this.state = state;
  }

  get uuid(): string {
    return this._uuid;
  }

  /**
   * Create a deep copy of the object.
   */
  abstract copy(): Base;

  /**
   * Create a deep copy of the object with a new UUID.
   */
  withUUID(uuid?: string): Base {
    const copied = this.copy();
    copied._uuid = uuid || uuidv4();
    return copied;
  }

  /**
   * Convert the object to a JSON value for serialization.
   */
  toJSON(): JsonObject {
    return { uuid: this._uuid };
  }

  /**
   * Check if this object is equal to another object
   * @param other Object to compare to
   * @returns True if the objects are equal, false otherwise
   */
  eq(other: Base): boolean {
    return this._uuid === other._uuid;
  }

  /**
   * Get this object's corresponding copy in the global state
   * @returns That object, or undefined if it doesn't exist
   */
  pull(): Base | undefined {
    return this.state.get(this._uuid);
  }

  /**
   * Add or update the object in the state it is bound to.
   */
  push() {
    return this.state.put(this);
  }

  delete() {
    return this.state.delete(this);
  }
}
