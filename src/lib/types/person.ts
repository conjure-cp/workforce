import { v4 as uuidv4 } from "uuid";
import { getInitials } from "$lib/utils.ts";
import type { Constraint } from "$lib/types/constraints.ts";
import { get } from "svelte/store";
import { constraints } from "$lib/stores";
import type { Skill } from "$lib/types/skill.ts";

export interface PersonProps {
  name: string;
  job_title: string;
  image_url: string;
  birthday: Date;
  skills: Skill[];
}

export class Person {
  uuid: string;
  name: string;
  job_title: string;
  image_url: string;
  birthday: Date;
  skills: Skill[];

  public constructor(props: PersonProps | undefined) {
    this.uuid = uuidv4();
    this.name = "";
    this.job_title = "";
    this.image_url = "";
    this.birthday = new Date();
    this.skills = [];

    if (props === undefined) {
      return;
    }
    this.update(props);
  }

  public get initials(): string {
    return getInitials(this.name);
  }

  public get age(): number {
    const today = new Date();
    return today.getFullYear() - this.birthday.getFullYear();
  }

  public get constraints(): Constraint[] {
    const constraints_list = get(constraints);
    return constraints_list.filter((c) => c.applies_to.uuid === this.uuid);
  }

  public get props(): PersonProps {
    return {
      name: this.name,
      job_title: this.job_title,
      image_url: this.image_url,
      birthday: this.birthday,
      skills: this.skills
    };
  }

  public update(props: PersonProps): void {
    this.name = props.name;
    this.job_title = props.job_title;
    this.image_url = props.image_url;
    this.birthday = props.birthday;
    this.skills = props.skills;
  }
}
