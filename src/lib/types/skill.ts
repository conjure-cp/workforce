import type { IconType } from "$lib/types/ui.ts";
import { v4 as uuidv4 } from "uuid";
import { get } from "svelte/store";
import { employees, tasks } from "$lib/stores.ts";
import type { Person } from "$lib/types/person.ts";
import type { Task } from "$lib/types/task.ts";

export class Skill {
  uuid: string;
  name: string;
  description: string;
  icon: IconType;

  public constructor(name: string, description: string, icon: IconType) {
    this.uuid = uuidv4();
    this.name = name;
    this.description = description;
    this.icon = icon;
  }

  public get people(): Person[] {
    const employees_list = get(employees);
    return employees_list.filter((p) => p.skills.map((s: Skill) => s.uuid).includes(this.uuid));
  }

  public get tasks(): Task[] {
    const tasks_list = get(tasks);
    return tasks_list.filter((t) =>
      t.required_skills.map((s: Skill) => s.uuid).includes(this.uuid)
    );
  }
}
