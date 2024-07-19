<!--suppress ES6UnusedImports -->
<script lang="ts">
  import Check from "lucide-svelte/icons/check";
  import * as Command from "$lib/components/ui/command";
  import * as Popover from "$lib/components/ui/popover";
  import { Button } from "$lib/components/ui/button";
  import PersonAvatar from "$lib/components/elements/person/person-avatar.svelte";
  import { cn } from "$lib/utils.js";
  import { tick } from "svelte";
  import { employees } from "$lib/stores.ts";
  import { Person } from "$lib/types/core.ts";

  let open = false;
  let person: Person | undefined = undefined;
  let options: Person[] = $employees;
  let filter: (p: Person | undefined) => boolean = () => true;
  let className: string = "";
  let variant: "default" | "destructive" = "default";

  $: filtered_options = options.filter(filter);

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

  // noinspection ReservedWordAsName
  export { person, variant, filter, className as class };
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder class={className}>
    <Button
      builders={[builder]}
      variant="ghost"
      role="combobox"
      aria-expanded={open}
      class="w-10 h-10 rounded-full overflow-visible"
    >
      <PersonAvatar person={person} variant={variant} placeholder="Assign person" />
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[200] p-0">
    <Command.Root>
      <Command.Input placeholder="Search" />
      <Command.Empty>No people found</Command.Empty>
      <Command.Group>
        {#each filtered_options as option}
          <Command.Item
            value="{option.uuid};{option.name}"
            onSelect={(val) => {
              const uuid = val.split(";")[0];
              person = $employees.find((p) => p.uuid === uuid);
              closeAndFocusTrigger(ids.trigger);
            }}
            class="flex flex-row items-center justify-start gap-2"
          >
            <PersonAvatar person={option} />
            {option.name}
            <Check
              class={cn(
                "ml-auto h-6 w-6",
                person !== option && "text-transparent"
              )}
            />
          </Command.Item>
        {/each}
        <Command.Item
          value="UNASSIGNED"
          onSelect={() => {
              person = undefined;
              closeAndFocusTrigger(ids.trigger);
            }}
          class="flex flex-row items-center justify-start gap-2"
        >
          <PersonAvatar person={undefined} popoverEnabled={false} />
          Unassigned
          <Check
            class={cn(
                "ml-auto h-6 w-6",
                person !== undefined && "text-transparent"
              )}
          />
        </Command.Item>
      </Command.Group>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
