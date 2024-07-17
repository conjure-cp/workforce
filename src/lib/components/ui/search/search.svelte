<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import { Button } from "$lib/components/ui/button";
  import { SearchIcon } from "lucide-svelte";
  import { Input } from "$lib/components/ui/input";

  let searchInput = writable("");
  let placeholder: string = "Search";
  let debounceTimeout: number;
  let focused: boolean = false;

  let debounceDelay: number = 300;
  let onInput: (value: string) => void = () => {
  };
  let onSubmit: (value: string) => void = () => {
  };

  function handleInputChange(e: Event) {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
      onInput((e.target as HTMLInputElement).value);
    }, debounceDelay);
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit($searchInput);
  }

  onMount(() => {
    return () => clearTimeout(debounceTimeout);
  });

  export { onInput, onSubmit, placeholder, debounceDelay };
</script>

<form class="relative h-10 rounded-md bg-white shadow overflow-clip" on:submit|preventDefault={handleSubmit}>
  <Input type="text" placeholder={placeholder} bind:value={$searchInput}
         on:input={handleInputChange} on:focusin={() => {focused = true}} on:blur={() => focused = false} />
  <Button type="submit" variant="ghost" size="icon"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-200 {focused ? 'opacity-100' : 'opacity-50'}">
    <SearchIcon />
  </Button>
</form>