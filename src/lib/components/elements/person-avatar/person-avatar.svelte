<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  // noinspection ES6UnusedImports
  import * as Tooltip from "$lib/components/ui/tooltip";
  // noinspection ES6UnusedImports
  import * as Avatar from "$lib/components/ui/avatar";
  import { CakeIcon } from "lucide-svelte";

  let person: Person;

  export { person };
</script>

<Tooltip.Root>
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
</Tooltip.Root>