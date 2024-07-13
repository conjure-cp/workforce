<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  // noinspection ES6UnusedImports
  import * as Tooltip from "$lib/components/ui/tooltip";
  // noinspection ES6UnusedImports
  import * as Avatar from "$lib/components/ui/avatar";
  import { CakeIcon, PlusIcon, UserIcon } from "lucide-svelte";

  let person: Person | undefined = undefined;

  export { person };
</script>

<Tooltip.Root>
  {#if person === undefined}
    <Tooltip.Trigger>
      <Avatar.Root>
        <Avatar.Fallback>
          <UserIcon class="w-full h-full p-1" />
          <PlusIcon
            class="p-1 w-full h-full bg-accent-foreground opacity-0 hover:opacity-100 hover:bg-opacity-60 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200" />
        </Avatar.Fallback>
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
