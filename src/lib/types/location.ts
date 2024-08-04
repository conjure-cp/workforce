import { v4 as uuidv4 } from "uuid";

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
