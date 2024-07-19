<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Avatar from "$lib/components/ui/avatar";
  import { CakeIcon, PlusIcon, UserIcon } from "lucide-svelte";

  let person: Person | undefined = undefined;
  let popoverEnabled: boolean = true;
  let placeholder: string = "Unassigned";
  let className: string = "";
  let variant: "default" | "destructive" = "default";

  // noinspection ReservedWordAsName
  export { person, placeholder, popoverEnabled, variant, className as class };
</script>

<Tooltip.Root>
  {#if person === undefined}
    <Tooltip.Trigger class={className}>
      <div
        class="group/avatar relative h-10 w-10 overflow-hidden rounded-full outline-none outline-offset-0 transition-all bg-opacity-10 {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-destructive' : 'hover:outline-accent-foreground bg-accent-foreground'}">
        <UserIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 group-hover/avatar:opacity-0 transition-all" />
        <PlusIcon class="absolute top-1 left-1 h-8 w-8 opacity-0 group-hover/avatar:opacity-100 transition-all" />
      </div>
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content>
        {placeholder}
      </Tooltip.Content>
    {/if}
  {:else}
    <Tooltip.Trigger class={className}>
      <Avatar.Root
        class="outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive' : 'hover:outline-accent-foreground'}">
        <Avatar.Image src={person.image_url} alt={person.name} />
        <Avatar.Fallback>{person.initials}</Avatar.Fallback>
      </Avatar.Root>
    </Tooltip.Trigger>
    {#if popoverEnabled}
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
  {/if}
</Tooltip.Root>
