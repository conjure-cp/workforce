<script lang="ts">
  import SkillSelector from "$lib/components/elements/skill/skill-selector.svelte";
  import { skills as skillsStore } from "$lib/stores";
  import type { Skill } from "$lib/types";
  import { pad } from "$lib/utils.ts";

  let options: Skill[] = $skillsStore;
  let skills: (Skill | undefined)[] = [];
  let n_skills: number | undefined = undefined;
  let compact: boolean = true;
  let className: string = "";

  $: {
    if (n_skills !== undefined) {
      skills = pad(skills, n_skills, undefined);
      skills = skills.sort((a, b) => a === undefined ? 1 : b === undefined ? -1 : 0); // put all undefined elements at the end
    } else {
      skills = skills.filter((s) => s !== undefined);
    }

    console.log(skills);
  }

  function chooseVariant(s: Skill | undefined, i: number) {
    if (n_skills !== undefined && i < n_skills) {
      if (s === undefined) {
        return "destructive";
      }
    }

    return "default";
  }

  function hasSkill(skills: (Skill | undefined)[], skill: Skill | undefined) {
    if (skill === undefined) return false;
    return skills.map((s) => s?.uuid).includes(skill.uuid);
  }

  export { skills, n_skills, compact, className as class };
</script>


<div class="flex flex-row items-center justify-start gap-2 flex-wrap {className}">
  {#each skills as skill, i}
    <SkillSelector bind:skill={skill}
                   options={options}
                   variant={chooseVariant(skill, i)}
                   compact={compact}
                   filter={(s) => (!hasSkill(skills, s) || (s === undefined) || (s.uuid === skill?.uuid))} />
  {/each}
  {#if n_skills === undefined}
    <SkillSelector skill={undefined}
                   options={options}
                   onChange={(_, s) => {
                     skills = [...skills, s];
                     return undefined;
                   }}
                   compact={compact}
                   icon_variant="plus"
                   filter={(s) => s !== undefined && !hasSkill(skills, s)} />
  {/if}
</div>