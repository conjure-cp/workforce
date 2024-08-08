import { v4 as uuidv4 } from "uuid";
import { Type } from "$lib/types/index.ts";

export type LngLat = [number, number];

export interface LocationProps {
  name: string;
  address: string;
  image_url: string;
  coordinates: LngLat;
}

export interface Location extends LocationProps {
  uuid: string;
  type: Type.Location;
}

export function createLocation(props: LocationProps): Location {
  return {
    uuid: uuidv4(),
    type: Type.Location,
    ...props
  };
}
