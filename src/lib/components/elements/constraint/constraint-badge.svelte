<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import PersonName from "$lib/components/elements/person/person-name.svelte";
  import { ClipboardXIcon, DraftingCompassIcon, MapPinOffIcon, PlusIcon, UserXIcon } from "lucide-svelte";
  import { Location, Person, Task } from "$lib/types";

  let constraint: Constraint | undefined;
  let popoverEnabled: boolean = true;
  let className: string = "";
  let placeholder: string = "No constraint selected";
  let variant: "default" | "destructive" = "default";
  let icon_variant: "default" | "placeholder" | "plus" = "default";

  // noinspection ReservedWordAsName
  export { constraint, variant, icon_variant, popoverEnabled, placeholder, className as class };
</script>

<Tooltip.Root>
  {#if constraint === undefined}
    <Tooltip.Trigger class="w-6 h-6 {className}">
      <div
        class="group relative h-6 w-6 overflow-hidden rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">
        {#if icon_variant === "default"}
          <DraftingCompassIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 group-hover:opacity-0 transition-all" />
          <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-0 group-hover:opacity-100 transition-all" />
        {:else if icon_variant === "placeholder"}
          <DraftingCompassIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 transition-all" />
        {:else if icon_variant === "plus"}
          <PlusIcon class="absolute top-0 left-0 h-6 w-6 opacity-100 transition-all" />
        {/if}
      </div>
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content>
        {placeholder}
      </Tooltip.Content>
    {/if}
  {:else}
    <Tooltip.Trigger class="w-6 h-6 {className}">
      {#if constraint.type === ConstraintType.NoTasks}
        <ClipboardXIcon
          class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else if constraint.type === ConstraintType.NoPeople}
        <UserXIcon class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else if constraint.type === ConstraintType.NoLocations}
        <MapPinOffIcon
          class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else}
        ??
      {/if}
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content class="max-w-[250px] overflow-visible">
        {#if constraint.type === ConstraintType.NoTasks}
          <h3 class="font-semibold mb-1">Tasks constraint</h3>
          {#if constraint.applies_to instanceof Location}
            <p class="text-muted-foreground align-middle">
              {#if constraint.tasks.length === 1}
                {constraint.tasks[0].name} cannot be done at {constraint.applies_to.name}
              {:else}
                {constraint.tasks.length} tasks cannot be done at {constraint.applies_to.name}
              {/if}
            </p>
          {:else if constraint.applies_to instanceof Person}
            <p class="text-muted-foreground align-middle">
              {#if constraint.tasks.length === 1}
                <PersonName person={constraint.applies_to} />
                cannot do {constraint.tasks[0].name}
              {:else}
                <PersonName person={constraint.applies_to} />
                cannot do {constraint.tasks.length} tasks
              {/if}
            </p>
          {:else}
            ??
          {/if}
        {:else if constraint.type === ConstraintType.NoPeople}
          <h3 class="font-semibold mb-1">Employees constraint</h3>
          {#if constraint.applies_to instanceof Location}
            <p class="text-muted-foreground align-middle">
              {#if constraint.people.length === 1}
                <PersonName person={constraint.people[0]} />
                cannot work at {constraint.applies_to.name}
              {:else}
                {constraint.people.length} people cannot work at {constraint.applies_to.name}
              {/if}
            </p>
          {:else if constraint.applies_to instanceof Person}
            <p class="text-muted-foreground align-middle">
              {#if constraint.people.length === 1}
                <PersonName person={constraint.applies_to} />
                cannot work with
                <PersonName person={constraint.people[0]} />
              {:else}
                <PersonName person={constraint.applies_to} />
                cannot work with {constraint.people.length} people
              {/if}
            </p>
          {:else if constraint.applies_to instanceof Task}
            <p class="text-muted-foreground align-middle">
              {#if constraint.people.length === 1}
                <PersonName person={constraint.people[0]} />
                cannot do {constraint.applies_to.name}
              {:else}
                {constraint.people.length} people cannot do {constraint.applies_to.name}
              {/if}
            </p>
          {:else}
            ??
          {/if}
        {:else if constraint.type === ConstraintType.NoLocations}
          <h3 class="font-semibold mb-1">Locations constraint</h3>
          {#if constraint.applies_to instanceof Person}
            <p class="text-muted-foreground align-middle">
              {#if constraint.locations.length === 1}
                <PersonName person={constraint.applies_to} />
                cannot work at {constraint.locations[0].name}
              {:else}
                <PersonName person={constraint.applies_to} />
                cannot work at {constraint.locations.length} locations
              {/if}
            </p>
          {:else if constraint.applies_to instanceof Task}
            <p class="text-muted-foreground align-middle">
              {#if constraint.locations.length === 1}
                {constraint.applies_to.name} cannot be done at {constraint.locations[0].name}
              {:else}
                {constraint.applies_to.name} cannot be done at {constraint.locations.length} locations
              {/if}
            </p>
          {:else}
            ??
          {/if}
        {:else}
          ??
        {/if}
      </Tooltip.Content>
    {/if}
  {/if}
</Tooltip.Root>
