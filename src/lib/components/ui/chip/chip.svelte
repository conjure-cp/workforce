<script lang="ts">
  import { PlusIcon } from "lucide-svelte";
  import { chipClasses as cl, ChipSize, ChipVariant } from "$lib/components/ui/chip/index.ts";
  import { darken, getTextColour } from "$lib/utils.ts";

  let variant: ChipVariant = ChipVariant.default;
  let size: ChipSize = ChipSize.md;
  let color: string | undefined = undefined;
  let className: string = "";

  $: textColor = getTextColour(color);
  $: darkenedColor = darken(color, 0.2);

  export { variant, size, color, className as class };
</script>

<div
  class="group/chip {cl.base} {cl.variants[variant]} {cl.sizes[size]} {className}"
  class:color={[ChipVariant.color, ChipVariant.colorOutline, ChipVariant.colorSolid].includes(variant) && color}
  class:outline={variant === ChipVariant.colorOutline}
  class:solid={variant === ChipVariant.colorSolid}
  style="--chip-color: {color}; --chip-text-color: {textColor}; --chip-darkened-color: {darkenedColor};"
>
  <span class="group-hover/chip:hidden {$$slots.default && 'pl-2'} {$$slots.hover && 'group-hover/chip:pl-2'}">
    <slot name="icon">
      <PlusIcon />
    </slot>
  </span>
  <span
    class="hidden group-hover/chip:inline-block {$$slots.default && 'pl-2'} {$$slots.hover && 'group-hover/chip:pl-2'}">
    <slot name="hover_icon">
      <slot name="icon">
        <PlusIcon />
      </slot>
    </slot>
  </span>
  {#if $$slots.default}
    <span class="group-hover/chip:hidden pr-2">
      <slot />
    </span>
  {/if}
  {#if $$slots.default || $$slots.hover}
    <span class="hidden group-hover/chip:inline-block pr-2">
      <slot name="hover">
        <slot />
      </slot>
    </span>
  {/if}
</div>

<style>
  .color.solid {
    background-color: var(--chip-color);
    color: var(--chip-text-color);
  }

  .color.solid:hover {
    outline: 2px solid hsl(var(--accent-foreground) / 1);
  }

  .color {
    color: var(--chip-darkened-color);
    position: relative;
    z-index: 1;
  }

  .color.outline {
    outline: 2px solid var(--chip-darkened-color);
  }

  .color::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .1;
    z-index: -1;
    background: var(--chip-color);
    border-radius: 9999px;
  }

  .color:hover {
    outline: 2px solid var(--chip-darkened-color);
  }

  .color.outline:hover {
    color: var(--chip-text-color);
    background-color: var(--chip-color);
    outline: 2px solid var(--chip-color);
  }
</style>