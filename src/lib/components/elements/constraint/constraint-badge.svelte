<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { type Constraint, ConstraintType } from "$lib/types/constraints.ts";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import PersonName from "$lib/components/elements/person/person-name.svelte";
  import { ClipboardXIcon, DraftingCompassIcon, MapPinOffIcon, PlusIcon, UserXIcon } from "lucide-svelte";

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
      {#if constraint.type === ConstraintType.NO_WORK_TOGETHER}
        <UserXIcon class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else if constraint.type === ConstraintType.NO_PERSON_AT_LOCATION}
        <MapPinOffIcon
          class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else if constraint.type === ConstraintType.NO_TASK_AT_LOCATION}
        <MapPinOffIcon
          class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else if constraint.type === ConstraintType.PERSON_CANNOT_DO_TASK}
        <ClipboardXIcon
          class="h-6 w-6 rounded-full bg-accent outline-none hover:outline-accent-foreground transition-all" />
      {:else}
        ??
      {/if}
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content class="max-w-[250px] overflow-visible">
        {#if constraint.type === ConstraintType.NO_WORK_TOGETHER}
          <p class="align-middle">
            <PersonName person={constraint.people[0]} />
            cannot work with
            <PersonName person={constraint.people[1]} />
          </p>
        {:else if constraint.type === ConstraintType.NO_PERSON_AT_LOCATION}
          <p class="align-middle">
            <PersonName person={constraint.person} />
            cannot work at {constraint.location.name}
          </p>
        {:else if constraint.type === ConstraintType.NO_TASK_AT_LOCATION}
          <p>
            Task "{constraint.task.name}" cannot be done at {constraint.location.name}
          </p>
        {:else if constraint.type === ConstraintType.PERSON_CANNOT_DO_TASK}
          <p>
            <PersonName person={constraint.person} />
            cannot do task "{constraint.task.name}"
          </p>
        {:else}
          ??
        {/if}
      </Tooltip.Content>
    {/if}
  {/if}
</Tooltip.Root>
