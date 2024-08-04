import { v4 as uuidv4 } from "uuid";
import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
import { get } from "svelte/store";
import { constraints } from "$lib/stores";

export type LngLat = [number, number];

export interface LocationProps {
  name: string;
  address: string;
  image_url: string;
  coordinates: LngLat;
}

export interface Location extends LocationProps {
  uuid: string;
}

export function createLocation(props: LocationProps): Location {
  return {
    uuid: uuidv4(),
    ...props
  };
}

export function getConstraintsForLocation(location: Location): Constraint[] {
  const constraints_list = get(constraints);
  return constraints_list.filter((c) => {
    switch (c.type) {
      case ConstraintType.NO_PERSON_AT_LOCATION:
      case ConstraintType.NO_TASK_AT_LOCATION:
        return c.location.uuid === location.uuid;
      default:
        return false;
    }
  });
}
