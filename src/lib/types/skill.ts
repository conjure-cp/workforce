import type { IconType } from "$lib/types/ui.ts";
import { get } from "svelte/store";
import { employees, tasks } from "$lib/stores.ts";
import type { Person } from "$lib/types/person.ts";
import type { Task } from "$lib/types/task.ts";
import { v4 as uuidv4 } from "uuid";
import { Type } from "$lib/types/index.ts";

export interface SkillProps {
  name: string;
  description: string;
  icon: IconType;
}

export interface Skill extends SkillProps {
  uuid: string;
  type: Type.Skill;
}

export function createSkill(props: SkillProps): Skill {
  return {
    uuid: uuidv4(),
    type: Type.Skill,
    ...props
  };
}

export function getPeopleWithSkill(skill: Skill): Person[] {
  const employees_list = get(employees);
  return employees_list.filter((p) => p.skill_uuids.includes(skill.uuid));
}

export function getTasksWithSkill(skill: Skill): Task[] {
  const tasks_list = get(tasks);
  return tasks_list.filter((t) => t.required_skills.map((s: Skill) => s.uuid).includes(skill.uuid));
}

export function defaultSkillProps(): SkillProps {
  return {
    name: "",
    description: "",
    icon: {
      icon: "",
      color: undefined
    }
  };
}
