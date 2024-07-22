<script lang="ts">
  import type { Skill } from "$lib/types/core.ts";
  import SkillBadge from "$lib/components/elements/skill/skill-badge.svelte";

  let skills: Skill[] = [];
  let placeholder: string = "No skills";
  let compact: boolean = true;
  let className: string = "";

  export { skills, compact, className as class };
</script>

{#if skills.length > 0}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap {className}">
    {#each skills as skill}
      <SkillBadge {skill} {compact} />
    {/each}
  </div>
{:else}
  <div class="text-accent-foreground {className}">{placeholder}</div>
{/if}