import { z } from "zod";
import { Property, type PropertyType } from "./property";
import type { JsonObject } from "type-fest";
import { get as _get } from "svelte/store";
import type { State } from "./state";

const kinds = z.enum(["equals", "in", "has", "hasAnyOf", "hasAllOf"]);
export type PredicateKind = z.infer<typeof kinds>;

export const SupportedPredicates: Record<PropertyType, PredicateKind[]> = {
  text: ["equals"],
  single: ["equals", "in"],
  multiple: ["equals", "has", "hasAnyOf", "hasAllOf"],
};

export type PropertyPredicate<T> = { neg: boolean } & (
  | { kind: "equals"; property: Property<T>; value: T | null }
  | { kind: "in"; property: Property<T>; value: T[] | null }
  | { kind: "has"; property: Property<T[]>; value: T | null }
  | { kind: "hasAnyOf"; property: Property<T[]>; value: T[] | null }
  | { kind: "hasAllOf"; property: Property<T[]>; value: T[] | null }
);

export function predicateToJSON<T>(predicate: PropertyPredicate<T>): JsonObject {
  const ans: JsonObject = {
    kind: predicate.kind,
    property: predicate.property.uuid,
    neg: predicate.neg,
  };
  switch (predicate.kind) {
    case "equals":
      return {
        ...ans,
        value: predicate.value === null ? null : predicate.property.serialize(predicate.value),
      };
    case "has":
      return {
        ...ans,
        value: predicate.value === null ? null : predicate.property.serialize([predicate.value]),
      };
    case "in":
      return {
        ...ans,
        value:
          predicate.value === null
            ? null
            : predicate.value.map((v) => predicate.property.serialize(v)),
      };
    case "hasAnyOf":
    case "hasAllOf":
      return {
        ...ans,
        value: predicate.value === null ? null : predicate.property.serialize(predicate.value),
      };
  }
}

export function predicateFromJSON<T>(json: JsonObject, state: State): PropertyPredicate<T> {
  const kind = kinds.parse(json.kind);
  const neg = z.boolean().parse(json.neg);
  const prop = z
    .string()
    .transform((uuid) => _get(state._properties).get(uuid) as Property<unknown>)
    .parse(json.property);

  switch (kind) {
    case "equals": {
      const property = prop as Property<T>;
      return { kind, property, value: property.schema.nullable().parse(json.value), neg };
    }
    case "has": {
      const property = prop as Property<T[]>;
      const parsed = property.schema.nullable().parse(json.value);
      return { kind, property, value: parsed === null ? null : parsed[0], neg };
    }
    case "in": {
      const property = prop as Property<T>;
      return { kind, property, value: property.schema.array().nullable().parse(json.value), neg };
    }
    case "hasAnyOf":
    case "hasAllOf": {
      const property = prop as Property<T[]>;
      return { kind, property, value: property.schema.nullable().parse(json.value), neg };
    }
    default:
      throw new Error(`Unknown predicate kind: ${kind}`);
  }
}
