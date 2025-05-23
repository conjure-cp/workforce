<script lang="ts" generics="T">
  import { Selector, SelectorMany } from "$lib/components/selector";
  import { Input } from "$lib/components/ui/input";
  import {
    MultiSelectProperty,
    Property,
    SelectProperty,
    TextProperty,
  } from "$lib/model/core/property";
  // import type { PropertyValues } from "$lib/model/core/property_values";

  // export let properties: PropertyValues;
  export let property: Property<T>;
  export let value: T | undefined | null;
  export let onChanged: (property: Property<T>, value: T) => void;
  export let variant: "compact" | "full" | "text" | "default" = "full";

  function putInputValue(property: Property<unknown>, e: Event) {
    onChanged(
      property as Property<T>,
      property.parse((e.target as HTMLInputElement)?.value).data as T,
    );
    // properties.put(property, (e.target as HTMLInputElement)?.value);
  }
</script>

<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<!-- {#if properties.has(property)} -->
{#if property instanceof SelectProperty}
  <!-- {@const val = properties.get(property) || undefined} -->
  <Selector
    {variant}
    value={property.parse(value).data}
    options={property.options}
    onSelected={(v) => {
      // @ts-ignore - This is guaranteed to be correct (SelectProperty implies T=PropertyOption) but TS is not a dependent type system so it has no way of knowing
      onChanged(property, v);
    }}
    placeholderIcon={property.icon?.with({ color: null })}
    {...$$restProps}
  />
{:else if property instanceof MultiSelectProperty}
  <!-- {@const val = properties.get(property) || []} -->
  <SelectorMany
    {variant}
    value={property.parse(value).data}
    options={property.options}
    onChanged={(v) => {
      // @ts-ignore - Same as above
      onChanged(property, v);
    }}
    placeholderIcon={property.icon?.with({ color: null })}
    plusIcon={property.icon?.with({ color: null })}
    {...$$restProps}
  />
{:else if property instanceof TextProperty}
  <Input {value} on:change={(e) => putInputValue(property, e)} />
{:else}
  <span class="text-muted-foreground">Unsupported property type</span>
{/if}
<!-- {:else}
  <span class="text-muted-foreground">No property selected</span>
{/if} -->
