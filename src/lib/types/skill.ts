import type { IconType } from "$lib/types/ui.ts";
import { get } from "svelte/store";
import { employees, tasks } from "$lib/stores.ts";
import type { Person } from "$lib/types/person.ts";
import type { Task } from "$lib/types/task.ts";
import { v4 as uuidv4 } from "uuid";

export interface SkillProps {
  name: string;
  description: string;
  icon: IconType;
}

export interface Skill extends SkillProps {
  uuid: string;
}

export function createSkill(props: SkillProps): Skill {
  return {
    uuid: uuidv4(),
    ...props
  };
}

export function getPeopleWithSkill(skill: Skill): Person[] {
  const employees_list = get(employees);
  return employees_list.filter((p) => p.skills.map((s: Skill) => s.uuid).includes(skill.uuid));
}

export function getTasksWithSkill(skill: Skill): Task[] {
  const tasks_list = get(tasks);
  return tasks_list.filter((t) => t.required_skills.map((s: Skill) => s.uuid).includes(skill.uuid));
}
