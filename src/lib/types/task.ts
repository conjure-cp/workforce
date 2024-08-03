import type { IconType } from "$lib/types/ui.ts";
import { v4 as uuidv4 } from "uuid";
import type { Constraint } from "$lib/types/constraints.ts";
import { get } from "svelte/store";
import type { Skill } from "$lib/types/skill.ts";
import type { Person } from "$lib/types/person.ts";
import { constraints } from "$lib/stores";

export class Task {
  uuid: string;
  name: string;
  description: string;
  icon: IconType;
  min_people: number;
  max_people: number;
  required_skills: Skill[];
  people: Person[];

  public constructor(
    name: string,
    description: string,
    icon: IconType,
    min_people: number,
    max_people: number,
    required_skills: Skill[],
    people: Person[]
  ) {
    this.uuid = uuidv4();
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.min_people = min_people;
    this.max_people = max_people;
    this.required_skills = required_skills;
    this.people = people;
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to.uuid === this.uuid);
  }
}
