<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { Button } from "$lib/components/ui/button";
  import { SearchIcon } from "lucide-svelte";

  let searchInput = writable("");
  let debounceTimeout: number;
  let focused: boolean = false;

  let debounceDelay: number = 300;
  let onInputChange: (value: string) => void = () => {
  };
  let onFormSubmit: (value: string) => void = () => {
  };

  function handleInputChange(e: Event) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      onInputChange((e.target as HTMLInputElement).value);
    }, debounceDelay);
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    onFormSubmit($searchInput);
  }

  onMount(() => {
    return () => clearTimeout(debounceTimeout);
  });

  export { onInputChange, onFormSubmit, debounceDelay };
</script>

<form class="relative h-10" on:submit|preventDefault={handleSubmit}>
  <input type="text" placeholder="Search" class="rounded-md bg-white p-2 shadow" bind:value={$searchInput}
         on:input={handleInputChange} on:focusin={() => {focused = true}} on:focusout={() => focused = false} />
  <Button type="submit" variant="ghost" size="icon_lg"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 {focused ? 'text-accent-foreground' : 'text-secondary-foreground'} transition-colours duration-200">
    <SearchIcon />
  </Button>
</form>