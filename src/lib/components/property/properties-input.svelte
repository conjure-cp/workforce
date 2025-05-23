<script lang="ts">
  import type { PropertyValues } from "$lib/model/core/property_values";
  import PropertyInput from "./property-input.svelte";

  export let properties: PropertyValues;
</script>

{#each properties.keys as property}
  {@const value = properties.get(property) || undefined}
  <div class="flex flex-col gap-1.5">
    <span class="font-semibold">{property.name}</span>
    <PropertyInput
      {property}
      {value}
      onChanged={(property, value) => properties.put(property, value)}
    />
  </div>
{/each}
