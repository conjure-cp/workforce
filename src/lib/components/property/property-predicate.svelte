<script lang="ts" generics="T">
  import { MultiSelectProperty, SelectProperty } from "$lib/model/core/property";

  import type { Selected } from "bits-ui";

  import {
    type PropertyPredicate,
    type PredicateKind,
    SupportedPredicates,
  } from "$lib/model/core/property_predicate";
  import * as Select from "$lib/components/ui/select";
  import PropertyInput from "./property-input.svelte";

  export let predicate: PropertyPredicate<T>;
  export let onChanged: (predicate: PropertyPredicate<T>) => void = () => {};

  const kindDescription: Record<PredicateKind, string> = {
    equals: "be",
    in: "be one of",
    has: "include",
    hasAllOf: "include all of",
    hasAnyOf: "include any of",
  };
  const kindSelects: Selected<string>[] = SupportedPredicates[predicate.property.type].map(
    (value) => ({ value, label: kindDescription[value] }),
  );
  function onKindChange(selected: Selected<string> | undefined) {
    if (!selected) return;
    predicate = {
      ...predicate,
      kind: selected.value as PredicateKind,
      value: null,
    } as PropertyPredicate<T>;
    onChanged(predicate);
  }
</script>

<div class="inline-flex items-center gap-2">
  <Select.Root
    selected={{ value: "notneg", label: "must" }}
    onSelectedChange={(v) => {
      predicate = { ...predicate, neg: v?.value === "neg" };
      onChanged(predicate);
    }}
  >
    <Select.Trigger class="!w-fit text-nowrap">
      <Select.Value />
    </Select.Trigger>
    <Select.Content class="!w-fit text-nowrap">
      <Select.Item value="notneg">must</Select.Item>
      <Select.Item value="neg">must not</Select.Item>
    </Select.Content>
  </Select.Root>

  <Select.Root
    selected={kindSelects.find((s) => s.value === predicate.kind)}
    onSelectedChange={onKindChange}
  >
    <Select.Trigger class="!w-fit text-nowrap">
      <Select.Value />
    </Select.Trigger>
    <Select.Content class="!w-fit text-nowrap">
      {#each kindSelects as { value, label }}
        <Select.Item {value}>{label}</Select.Item>
      {/each}
    </Select.Content>
  </Select.Root>

  {#if predicate.kind == "equals"}
    <!-- eslint-disable @typescript-eslint/ban-ts-comment -->
    <PropertyInput
      property={predicate.property}
      value={predicate.value}
      onChanged={(_, value) => {
        // @ts-ignore
        predicate = { ...predicate, value };
        onChanged(predicate);
      }}
    />
  {:else if predicate.kind == "in" && predicate.property instanceof SelectProperty}
    {@const multi = predicate.property.asMultiSelect()}
    <!-- eslint-disable @typescript-eslint/ban-ts-comment -->
    <PropertyInput
      property={multi}
      value={multi.parse(predicate.value).data}
      onChanged={(_, value) => {
        // @ts-ignore
        predicate = { ...predicate, value };
        onChanged(predicate);
      }}
    />
  {:else if predicate.kind == "has" && predicate.property instanceof MultiSelectProperty}
    {@const single = predicate.property.asSingleSelect()}
    <!-- eslint-disable @typescript-eslint/ban-ts-comment -->
    <PropertyInput
      property={single}
      value={single.parse(predicate.value).data}
      onChanged={(_, value) => {
        // @ts-ignore
        predicate = { ...predicate, value };
        onChanged(predicate);
      }}
    />
  {:else if ["hasAllOf", "hasAnyOf"].includes(predicate.kind) && predicate.property instanceof MultiSelectProperty}
    <PropertyInput
      property={predicate.property}
      value={predicate.property.parse(predicate.value).data}
      onChanged={(_, value) => {
        // @ts-ignore
        predicate = { ...predicate, value };
        onChanged(predicate);
      }}
    />
  {:else}
    <!-- This should never happen -->
    <span class="text-destructive">
      Unsupported predicate {predicate.kind} on {predicate.property.name} ({predicate.property
        .type})
    </span>
  {/if}
</div>
