<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Label } from "$lib/components/ui/label";
  import * as RadioGroup from "$lib/components/ui/radio-group";
  import { Switch } from "$lib/components/ui/switch";
  import { populateState } from "$lib/dummy-data";
  import { state } from "$lib/model";
  import { type Settings } from "$lib/model/core";
  import { RefreshCwIcon, TrashIcon } from "lucide-svelte";
  import { setMode, mode } from "mode-watcher";

  const settings = state.settings;

  const assignmentOptions = new Map<
    Settings["assignmentMode"],
    { name: string; description: string }
  >([
    [
      "granular",
      {
        name: "Granular",
        description:
          "Shifts consist of multiple tasks which can be assigned to individual employees",
      },
    ],
    ["simple", { name: "Simple", description: "Employees are assigned to shifts as a whole" }],
  ]);

  function setTheme(theme: string) {
    setMode(theme as "light" | "dark" | "system");
  }
</script>

<div class="flex flex-col gap-8 px-6 pt-4">
  <h1 class="text-2xl font-semibold">Settings</h1>

  <Card.Root>
    <Card.Header>
      <Card.Title>Appearance</Card.Title>
      <Card.Description>Tweak the appearance of the app</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="flex flex-col gap-2">
        <Label class="text-md mb-1 font-semibold" for="theme">Theme</Label>
        <RadioGroup.Root
          value={$mode || "system"}
          id="theme"
          onValueChange={(val) => setTheme(val)}
        >
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="light" id="light" />
            <Label for="light">Light</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="dark" id="dark" />
            <Label for="dark">Dark</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroup.Item value="system" id="system" />
            <Label for="system">System</Label>
          </div>
        </RadioGroup.Root>
      </div>
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Header>
      <Card.Title>Behaviour</Card.Title>
      <Card.Description>Customize the app's behaviour</Card.Description>
    </Card.Header>
    <Card.Content>
      {#if assignmentOptions.size > 0}
        <div class="flex flex-col gap-2">
          <Label class="text-md mb-1 font-semibold" for="assignmentMode">Assignment Mode</Label>
          <RadioGroup.Root value={$settings.assignmentMode} id="assignmentMode">
            {#each assignmentOptions.entries() as [option, { name, description }]}
              <div class="flex items-center space-x-2">
                <RadioGroup.Item
                  value={option}
                  id={option}
                  on:click={() => {
                    $settings.assignmentMode = option;
                  }}
                />
                <div class="flex flex-col">
                  <Label for={option}>{name}</Label>
                  <p class="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            {/each}
          </RadioGroup.Root>
        </div>
      {/if}
    </Card.Content>
  </Card.Root>

  <Card.Root>
    <Card.Header>
      <Card.Title>Miscelaneous</Card.Title>
      <Card.Description>Other settings for the application</Card.Description>
    </Card.Header>
    <Card.Content>
      <div class="flex items-center space-x-2">
        <Switch id="askDeleteConfirmation" bind:checked={$settings.askDeleteConfirmation} />
        <Label for="askDeleteConfirmation">Always ask me to confirm destructive operations</Label>
      </div>
      <div class="mt-4 flex items-center space-x-2">
        <Switch id="development" bind:checked={$settings.development} />
        <Label for="development">Development Mode</Label>
      </div>
    </Card.Content>
  </Card.Root>

  {#if $settings.development}
    <Card.Root class="bg-destructive bg-opacity-10">
      <Card.Header>
        <Card.Title>Developer Zone</Card.Title>
        <Card.Description
          >This section contains developer utilities and settings. Don't change them unless you know
          what you are doing!</Card.Description
        >
      </Card.Header>
      <Card.Content>
        <section>
          <h3 class="mb-2 font-semibold">State Management</h3>
          <div class="flex flex-row gap-4">
            <Button
              on:click={() => {
                state.clear();
                populateState(state);
              }}
            >
              <RefreshCwIcon />
              Generate Dummy Data
            </Button>
            <Button
              variant="destructive"
              on:click={() => {
                state.clear();
              }}
            >
              <TrashIcon />
              Clear state
            </Button>
          </div>
        </section>
      </Card.Content>
    </Card.Root>
  {/if}
</div>
