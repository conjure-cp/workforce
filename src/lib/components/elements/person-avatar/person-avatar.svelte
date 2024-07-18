<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  // noinspection ES6UnusedImports
  import * as Tooltip from "$lib/components/ui/tooltip";
  // noinspection ES6UnusedImports
  import * as Avatar from "$lib/components/ui/avatar";
  import { CakeIcon, UserIcon } from "lucide-svelte";

  let person: Person | undefined = undefined;

  export { person };
</script>

<Tooltip.Root>
  {#if person === undefined}
    <Tooltip.Trigger>
      <Avatar.Root>
        <Avatar.Fallback>
          <UserIcon class="w-full h-full p-1" />
        </Avatar.Fallback>
      </Avatar.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      No person assigned
    </Tooltip.Content>
  {:else}
    <Tooltip.Trigger>
      <Avatar.Root>
        <Avatar.Image src={person.image_url} alt={person.name} />
        <Avatar.Fallback>{person.initials}</Avatar.Fallback>
      </Avatar.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-semibold">{person.name}</h3>
        <div class="flex flex-row ml-2 gap-1 items-center">
          <CakeIcon />
          {person.age}
        </div>
      </div>
      <div>
        {person.job_title}
      </div>
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
