import type { IconType } from "$lib/types/ui.ts";
import { get } from "svelte/store";
import type { Skill } from "$lib/types/skill.ts";
import type { Person } from "$lib/types/person.ts";
import { employees } from "$lib/stores";
import { v4 as uuidv4 } from "uuid";
import { Type } from "$lib/types/index.ts";

export interface TaskProps {
  name: string;
  description: string;
  icon: IconType;
  min_people: number;
  max_people: number;
  required_skills: Skill[];
  people: Person[];
}

export interface Task extends TaskProps {
  uuid: string;
  type: Type.Task;
}

export function createTask(props: TaskProps): Task {
  return {
    uuid: uuidv4(),
    type: Type.Task,
    ...props
  };
}

export function getCandidatesForTask(task: Task): Person[] {
  const employees_list = get(employees);
  const required_skills = new Set(task.required_skills.map((s) => s.uuid));
  return employees_list.filter((p) =>
    required_skills.isSubsetOf(new Set(p.skills.map((s) => s.uuid)))
  );
}
