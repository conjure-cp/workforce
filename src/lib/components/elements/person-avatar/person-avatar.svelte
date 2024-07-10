<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  // noinspection ES6UnusedImports
  import * as Tooltip from "$lib/components/ui/tooltip";
  // noinspection ES6UnusedImports
  import * as Avatar from "$lib/components/ui/avatar";
  import { CakeIcon, UserIcon } from "lucide-svelte";

  let person: Person | undefined = undefined;
  let hover: boolean = false;

  export { person };
</script>

<Tooltip.Root on:mouseenter={() => {hover = true}} on:mouseleave={() => {hover = false}}>
  {#if (person === undefined)}
    <Tooltip.Trigger>
      <Avatar.Root>
        {#if hover}
          <Avatar.Fallback>+</Avatar.Fallback>
        {:else }
          <Avatar.Fallback>
            <UserIcon />
          </Avatar.Fallback>
        {/if}
      </Avatar.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      Assign person
    </Tooltip.Content>
  {:else}
    <Tooltip.Trigger>
      <Avatar.Root>
        <Avatar.Image src={person.avatar_url} alt={person.name} />
        <Avatar.Fallback>{person.initials}</Avatar.Fallback>
      </Avatar.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <h3>{person.name}</h3>
      <div>
        {person.job_title}
        <div>
          <CakeIcon />
          {person.age}
        </div>
      </div>
    </Tooltip.Content>
  {/if}
</Tooltip.Root>