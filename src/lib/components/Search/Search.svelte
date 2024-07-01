<script lang="ts">
  import { writable } from "svelte/store";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let searchInput = writable("");
  let debounceTimeout: number;

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
         on:input={handleInputChange} />
  <button type="submit" class="absolute right-2 top-1/2 transform -translate-y-1/2">
    <Icon icon="mdi:magnify" class="text-gray-500 text-2xl hover:text-black transition-colors duration-200" />
  </button>
</form>