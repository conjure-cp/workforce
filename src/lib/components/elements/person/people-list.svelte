<script lang="ts">
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";
  import type { Person } from "$lib/types/core.ts";

  let people: Person[] = [];
  let compact: boolean = false;
  let max: number | undefined = undefined;

  $: people_list = max ? people.slice(0, max) : people;

  export { people, compact, max };
</script>

{#if compact}
  <div class="group flex flex-row items-center justify-start flex-wrap">
    {#each people_list as person}
      <div class="relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100">
        <PersonAvatar person={person}
                      class="absolute top-0 left-0 w-10 h-10" />
      </div>
    {/each}
    {#if max && people.length > max}
      <div
        class="group relative w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100 transition-all">
        <div
          class="absolute top-0 left-0 w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-full">
          +{people.length - max}
        </div>
      </div>
    {/if}
  </div>
{:else}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each people_list as person}
      <PersonAvatar person={person} />
    {/each}
    {#if max && people.length > max}
      <div class="w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center rounded-full">
        +{people.length - max}
      </div>
    {/if}
  </div>
{/if}
