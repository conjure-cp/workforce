<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Person } from "$lib/types";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import * as Avatar from "$lib/components/ui/avatar";
  import Chip from "$lib/components/ui/chip/chip.svelte";
  import PersonTooltip from "$lib/components/elements/person/person-tooltip.svelte";
  import { PlusIcon, UserIcon } from "lucide-svelte";
  import { getInitialsForPerson } from "$lib/types/person.ts";
  import { ChipSize, ChipVariant } from "$lib/components/ui/chip";

  let person: Person | undefined = undefined;
  let popoverEnabled: boolean = true;
  let placeholder: string = "Unassigned";
  let variant: ChipVariant = ChipVariant.default;
  let className: string = "";

  // noinspection ReservedWordAsName
  export { person, placeholder, popoverEnabled, variant, className as class };
</script>

<Tooltip.Root>
  <Tooltip.Trigger>
    {#if person}
      <Chip {variant} class="{className} !p-0" size={ChipSize.lg}>
        <Avatar.Root slot="icon" class="w-10 h-10">
          <Avatar.Image src={person.image_url} alt={person.name} />
          <Avatar.Fallback>{getInitialsForPerson(person)}</Avatar.Fallback>
        </Avatar.Root>
      </Chip>
    {:else }
      <Chip {variant} class="{className} !p-1" size={ChipSize.lg}>
        <UserIcon slot="icon" class="w-8 h-8" />
        <PlusIcon slot="hover_icon" class="w-8 h-8" />
      </Chip>
    {/if}
  </Tooltip.Trigger>
  {#if popoverEnabled}
    <Tooltip.Content>
      {#if person}
        <PersonTooltip person={person} />
      {:else}
        {placeholder}
      {/if}
    </Tooltip.Content>
  {/if}
</Tooltip.Root>

<!--<Tooltip.Root>-->
<!--  {#if person === undefined}-->
<!--    <Tooltip.Trigger class={className}>-->
<!--      <div-->
<!--        class="group/avatar relative h-10 w-10 overflow-hidden rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">-->
<!--        {#if icon_variant === "default"}-->
<!--          <UserIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 group-hover/avatar:opacity-0 transition-all" />-->
<!--          <PlusIcon class="absolute top-1 left-1 h-8 w-8 opacity-0 group-hover/avatar:opacity-100 transition-all" />-->
<!--        {:else if icon_variant === "placeholder"}-->
<!--          <UserIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 transition-all" />-->
<!--        {:else if icon_variant === "plus"}-->
<!--          <PlusIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 transition-all" />-->
<!--        {/if}-->
<!--      </div>-->
<!--    </Tooltip.Trigger>-->
<!--    {#if popoverEnabled}-->
<!--      <Tooltip.Content>-->
<!--        {placeholder}-->
<!--      </Tooltip.Content>-->
<!--    {/if}-->
<!--  {:else}-->
<!--    <Tooltip.Trigger class={className}>-->
<!--      <Avatar.Root-->
<!--        class="outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive' : 'hover:outline-accent-foreground'}">-->
<!--        <Avatar.Image src={person.image_url} alt={person.name} />-->
<!--        <Avatar.Fallback>{getInitialsForPerson(person)}</Avatar.Fallback>-->
<!--      </Avatar.Root>-->
<!--    </Tooltip.Trigger>-->
<!--    {#if popoverEnabled}-->
<!--      <Tooltip.Content>-->
<!--        <PersonTooltip person={person} />-->
<!--      </Tooltip.Content>-->
<!--    {/if}-->
<!--  {/if}-->
<!--</Tooltip.Root>-->
