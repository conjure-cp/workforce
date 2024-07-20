<script lang="ts">
  import type { Skill } from "$lib/types/core.ts";
  import SkillBadge from "$lib/components/elements/skill/skill.svelte";

  let skills: Skill[] = [];
  let placeholder: string = "No skills";

  export { skills };
</script>

{#if skills.length > 0}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each skills as skill}
      <SkillBadge skill={skill} />
    {/each}
  </div>
{:else}
  <div class="text-accent-foreground">{placeholder}</div>
{/if}