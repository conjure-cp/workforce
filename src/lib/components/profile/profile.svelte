<!--
Standard component for displaying anything that implements `Display`.
The following variants are available:
- `default`: Displays the profile picture / icon only. Name and description are shown in a tooltip.
- `text`: Displays the name of the item as a text link. The profile picture / icon is shown in a tooltip.
- `full`: Displays the profile picture / icon and the name of the item. The description is shown in a tooltip.

TODO: better docs
-->
<script lang="ts" generics="T extends Display">
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { Icon, type Display } from "$lib/ui";
  import { ProfilePicture, type Size } from ".";
  import Button from "../ui/button/button.svelte";
  import ProfileTooltip from "./profile-tooltip.svelte";

  export let item: T | undefined = undefined;
  export let size: Size = "md";
  export let variant: "default" | "text" | "full" = "default";
  export let defaultIcon: Icon | undefined = undefined;
  export let emptyIcon: Icon | undefined = undefined;
  export let placeholder = "Not Selected";
  export let group: string | undefined = undefined;
  export let hoverEffects = true;
  export let showTooltip = true;
  export let tooltipSide: "top" | "bottom" | "left" | "right" | undefined = undefined;
  export let onClick: ((item: T | undefined) => void) | undefined = undefined;
  let className = "";

  export { className as class };
</script>

<Tooltip.Root openDelay={100} closeDelay={100} {group}>
  {#if variant === "text"}
    {#if onClick !== undefined}
      <Tooltip.Trigger asChild let:builder>
        <Button
          builders={[builder]}
          variant="link"
          class={className}
          on:click={() => onClick(item)}
        >
          {#if item?.name}
            <span>{item?.name}</span>
          {:else}
            <span class="text-muted-foreground">{placeholder}</span>
          {/if}
        </Button>
      </Tooltip.Trigger>
    {:else}
      <Tooltip.Trigger class="w-max {className}">
        <span class="decoration-2 {hoverEffects && 'hover:underline'}">
          {#if item?.name}
            <span>{item?.name}</span>
          {:else}
            <span class="text-muted-foreground">{placeholder}</span>
          {/if}
        </span>
      </Tooltip.Trigger>
    {/if}
  {:else if variant === "full"}
    {#if onClick !== undefined}
      <Tooltip.Trigger asChild let:builder>
        <Button
          builders={[builder]}
          class="flex w-max flex-row items-center justify-center gap-2 rounded-full px-2 py-0.5 decoration-2 transition-all {hoverEffects
            ? 'outline-none hover:bg-accent hover:outline-accent-foreground'
            : ''} {className}"
          on:click={() => onClick(item)}
        >
          <ProfilePicture {item} {size} {defaultIcon} {emptyIcon} class="!pointer-events-none" />
          {#if item?.name}
            <span>{item?.name}</span>
          {:else}
            <span class="text-muted-foreground">{placeholder}</span>
          {/if}
        </Button>
      </Tooltip.Trigger>
    {:else}
      <Tooltip.Trigger
        class="flex w-max flex-row items-center justify-center gap-2 rounded-full px-2 py-0.5 decoration-2 transition-all {hoverEffects &&
          'outline-none hover:bg-accent hover:outline-accent-foreground'} {className}"
      >
        <ProfilePicture {item} {size} {defaultIcon} {emptyIcon} class="!pointer-events-none" />
        {#if item?.name}
          <span>{item?.name}</span>
        {:else}
          <span class="text-muted-foreground">{placeholder}</span>
        {/if}
      </Tooltip.Trigger>
    {/if}
  {:else if onClick !== undefined}
    <Tooltip.Trigger asChild let:builder>
      <Button
        builders={[builder]}
        class="w-max rounded-full {className}"
        on:click={() => onClick(item)}
      >
        <ProfilePicture
          {item}
          {size}
          {defaultIcon}
          {emptyIcon}
          class={hoverEffects ? "" : "!pointer-events-none"}
        />
      </Button>
    </Tooltip.Trigger>
  {:else}
    <Tooltip.Trigger class="w-max rounded-full {className}">
      <ProfilePicture
        {item}
        {size}
        {defaultIcon}
        {emptyIcon}
        class={hoverEffects ? "" : "!pointer-events-none"}
      />
    </Tooltip.Trigger>
  {/if}
  {#if showTooltip}
    <Tooltip.Content side={tooltipSide}>
      <slot name="tooltip">
        <ProfileTooltip {item} />
      </slot>
    </Tooltip.Content>
  {/if}
</Tooltip.Root>
