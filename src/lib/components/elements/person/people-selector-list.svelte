<script lang="ts">
  import PersonSelector from "$lib/components/elements/person/person-selector.svelte";
  import type { Person } from "$lib/types/core.ts";

  let people: (Person | undefined)[] = [];
  let compact: boolean = false;
  let min_people: number;
  let max_people: number;

  $: {
    if (people.length < max_people) {
      people = [...people, ...Array(max_people - people.length).fill(undefined)];
    } else if (people.length > max_people) {
      people = people.slice(0, max_people);
    }

    // put all undefined elements at the end
    people = people.sort((a, b) => a === undefined ? 1 : b === undefined ? -1 : 0);
  }

  export { people, compact, min_people, max_people };
</script>

{#if compact}
  <div class="group flex flex-row items-center justify-start flex-wrap">
    {#each people as person, i}
      <div class="relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100">
        <PersonSelector bind:person={person}
                        variant={i < min_people ? "destructive" : "default"}
                        filter={(p) => !people.includes(p) || p === undefined}
                        class="absolute top-0 left-0 w-10 h-10" />
      </div>
    {/each}
  </div>
{:else}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap">
    {#each people as person, i}
      <PersonSelector bind:person={person}
                      variant={i < min_people ? "destructive" : "default"}
                      filter={(p) => !people.includes(p) || p === undefined} />
    {/each}
  </div>
{/if}