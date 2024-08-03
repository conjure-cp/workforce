<script lang="ts">
  import PersonSelector from "$lib/components/elements/person/person-selector.svelte";
  import type { Person } from "$lib/types/core.ts";
  import { pad } from "$lib/utils.ts";
  import { employees } from "$lib/stores.ts";

  let options: Person[] = $employees;
  let people: (Person | undefined)[] = [];
  let compact: boolean = false;
  let min_people: number;
  let max_people: number;
  let className: string = "";

  $: {
    people = pad(people, max_people, undefined);
    people = people.sort((a, b) => a === undefined ? 1 : b === undefined ? -1 : 0); // put all undefined elements at the end
  }

  function chooseVariant(p: Person | undefined, i: number) {
    if (i < min_people) {
      if (p === undefined) {
        return "destructive";
      }
    }

    return "default";
  }

  function hasPerson(people: (Person | undefined)[], person: Person | undefined) {
    if (person === undefined) return false;
    return people.map((p) => p?.uuid).includes(person.uuid);
  }

  export { people, compact, min_people, max_people, className as class };
</script>

{#if compact}
  <div class="group flex flex-row items-center justify-start flex-wrap {className}">
    {#each people as person, i}
      <div class="relative transition-all w-4 h-10 hover:z-20 hover:w-5 group-hover:opacity-55 hover:!opacity-100">
        <PersonSelector bind:person={person}
                        options={options}
                        variant={chooseVariant(person, i)}
                        filter={(p) => (!hasPerson(people, p) || (p === undefined) || (p.uuid === person?.uuid))}
                        class="absolute top-0 left-0 w-10 h-10" />
      </div>
    {/each}
  </div>
{:else}
  <div class="flex flex-row items-center justify-start gap-2 flex-wrap {className}">
    {#each people as person, i}
      <PersonSelector bind:person={person}
                      options={options}
                      variant={chooseVariant(person, i)}
                      filter={(p) => (!hasPerson(people, p) || (p === undefined) || (p.uuid === person?.uuid))} />
    {/each}
  </div>
{/if}