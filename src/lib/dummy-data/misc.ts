import type { Property } from "$lib/model";
import { MultiSelectProperty, SelectProperty } from "$lib/model/core/property";
import type { PredicateKind, PropertyPredicate } from "$lib/model/core/property_predicate";
import { Icon } from "$lib/ui";
import { faker } from "@faker-js/faker";

export function select<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const _arr = arr.slice();
  const ans = [];

  while (_arr.length > 0) {
    const index = Math.floor(Math.random() * _arr.length);
    ans.push(_arr[index]);
    _arr.splice(index, 1);
  }

  return ans;
}

export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

export function weighedSelect<T>(arr: T[], weights: number[]): T {
  const total = weights.slice().reduce((a, b) => a + b, 0);
  const r = Math.random() * total;

  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc += weights[i];
    if (r < acc) {
      return arr[i];
    }
  }

  return arr[arr.length - 1];
}

export function randomIcon(): Icon {
  const icons = ["lucide:calendar", "lucide:user", "lucide:settings", "lucide:home", "lucide:star"];
  return Icon.fromString(select(icons), faker.color.rgb());
}

export function randomPredicate<T>(property: Property<T>): PropertyPredicate<T> {
  let kind: PredicateKind;
  if (property instanceof MultiSelectProperty) {
    kind = select(["hasAnyOf", "hasAllOf", "has"]) as PredicateKind;
  } else if (property instanceof SelectProperty) {
    kind = select(["equals", "in"]) as PredicateKind;
  } else {
    kind = "equals" as PredicateKind;
  }
  return { property, kind, neg: Math.random() < 0.5, value: null } as PropertyPredicate<T>;
}
