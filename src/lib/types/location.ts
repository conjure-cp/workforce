import { v4 as uuidv4 } from "uuid";
import type { Constraint } from "$lib/types/constraints.ts";
import { get } from "svelte/store";
import { constraints } from "$lib/stores";

export type LngLat = [number, number];

export class Location {
  uuid: string;
  name: string;
  address: string;
  image_url: string;
  coordinates: LngLat;

  public constructor(name: string, full_address: string, image_url: string, coordinates: LngLat) {
    this.uuid = uuidv4();
    this.name = name;
    this.address = full_address;
    this.image_url = image_url;
    this.coordinates = coordinates;
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to.uuid === this.uuid);
  }
}
