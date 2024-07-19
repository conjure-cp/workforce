<script lang="ts">
  import PersonSelector from "$lib/components/elements/person/person-selector.svelte";
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";
  import type { Person } from "$lib/types/core.ts";

  let people: Person[] = [];
  let compact: boolean = false;
  let min_people: number;
  let max_people: number;

  $: unfilled = Math.max(min_people - people.length, 0);
  $: optional = Math.max(max_people - people.length - unfilled, 0);

  export { people, compact, min_people, max_people };
</script>

{#if compact}
  <div class="group flex flex-row items-center justify-start flex-wrap">
    {#each people as person}
      <div class="relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100">
        <PersonAvatar person={person}
                      class="absolute top-0 left-0 w-10 h-10" />
      </div>
    {/each}
    {#each { length: unfilled } as _}
      <div class="relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100">
        <PersonAvatar person={undefined}
                      variant="destructive"
                      class="absolute top-0 left-0 w-10 h-10" />
      </div>
    {/each}
    {#each { length: optional } as _}
      <div class="relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100">
        <PersonAvatar person={undefined}
                      class="absolute top-0 left-0 w-10 h-10" />
      </div>
    {/each}
  </div>
{:else}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each people as person}
      <PersonSelector person={person} />
    {/each}
    {#each { length: unfilled } as _}
      <PersonSelector person={undefined}
                      variant="destructive" />
    {/each}
    {#each { length: optional } as _}
      <PersonSelector person={undefined} />
    {/each}
  </div>
{/if}
