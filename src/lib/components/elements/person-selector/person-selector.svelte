<!--suppress ES6UnusedImports -->
<script lang="ts">
  import Check from "lucide-svelte/icons/check";
  import * as Command from "$lib/components/ui/command/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button/index.js";
  import PersonAvatar from "$lib/components/elements/person-avatar/person-avatar.svelte";
  import { cn } from "$lib/utils.js";
  import { tick } from "svelte";
  import { employees } from "$lib/stores.ts";
  import { Person } from "$lib/types/core.ts";
  import { UserIcon } from "lucide-svelte";

  let open = false;
  let person: Person | undefined = undefined;

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }

  export { person };
</script>

<Popover.Root bind:open let:ids>
  <Popover.Trigger asChild let:builder>
    <Button
      builders={[builder]}
      variant="ghost"
      role="combobox"
      aria-expanded={open}
      class="h-10 w-10 justify-start relative"
    >
      <Avatar.Root>
        {#if person === undefined}
          <Avatar.Fallback>
            <UserIcon class="w-full h-full p-1" />
          </Avatar.Fallback>
        {:else }
          <Avatar.Image src={person.image_url} alt={person.name} />
          <Avatar.Fallback>{person.initials}</Avatar.Fallback>
        {/if}
      </Avatar.Root>
    </Button>
  </Popover.Trigger>
  <Popover.Content class="w-[200] p-0">
    <Command.Root>
      <Command.Input placeholder="Search" />
      <Command.Empty>No people found</Command.Empty>
      <Command.Group>
        {#each $employees as option}
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
          <PersonAvatar person={undefined} />
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