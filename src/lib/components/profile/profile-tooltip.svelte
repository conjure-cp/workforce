<!--
Tooltip that displays when hovering over a profile picture / icon.
TODO: add docs
-->
<script lang="ts" generics="T extends Display">
  import { ProfilePicture } from ".";

  import { Person, Property, Shift, Task } from "$lib/model/core";
  import { type Display } from "$lib/ui";

  let item: T | undefined = undefined;
  let placeholder = "No item selected";
  let className = "";

  export { className as class, item, placeholder };
</script>

{#if item}
  <div class="flex w-max flex-row items-center justify-between gap-4 {className}">
    <ProfilePicture {item} size="lg" />
    <div class="flex w-full flex-col justify-between gap-[2px] py-1">
      <div class="flex w-full flex-row items-center justify-between">
        <span class="font-semibold">{item.name}</span>
      </div>
      {#if item instanceof Person}
        Employee
      {:else if item instanceof Task}
        Task
      {:else if item instanceof Property}
        Property
      {:else if item instanceof Location}
        Location
      {:else if item instanceof Shift}
        Shift
      {/if}
    </div>
  </div>
  {#if item.description}
    <p class="max-w-[30ch] text-gray-500">{item.description}</p>
  {/if}
{:else}
  <p class="text-muted-foreground">{placeholder}</p>
{/if}
