<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Person } from "$lib/types";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Avatar from "$lib/components/ui/avatar";
  import PersonTooltip from "$lib/components/elements/person/person-tooltip.svelte";
  import { getInitialsForPerson } from "$lib/types/person.ts";

  let person: Person;
  let popoverEnabled: boolean = true;
  let showAvatar: boolean = true;
  let className: string = "";

  export { person, showAvatar, popoverEnabled, className };
</script>

<Tooltip.Root>
  <Tooltip.Trigger class="underline align-middle {className}">
    {#if showAvatar}
      <Avatar.Root class="h-5 w-5 rounded-full inline-flex align-middle mr-1">
        <Avatar.Image src={person.image_url} alt={person.name} />
        <Avatar.Fallback>{getInitialsForPerson(person)}</Avatar.Fallback>
      </Avatar.Root>
    {/if}
    <b>{person.name}</b>
  </Tooltip.Trigger>
  {#if popoverEnabled}
    <Tooltip.Content>
      <PersonTooltip person={person} />
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
