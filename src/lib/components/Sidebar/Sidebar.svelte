<script lang="ts">
  import { SidebarPosition } from "$lib/components/Sidebar/types";
  import Button from "$lib/components/Button.svelte";

  let isExpanded: boolean = false;
  let position: SidebarPosition;
  let expandedWidth: string = "250px";
  let collapsedWidth: string = "72px";
  let toggleIcon: string;

  $: {
    if (position === SidebarPosition.left) {
      toggleIcon = isExpanded ? "tabler:layout-sidebar-left-collapse-filled" : "tabler:layout-sidebar-left-expand-filled";
    } else {
      toggleIcon = isExpanded ? "tabler:layout-sidebar-right-collapse-filled" : "tabler:layout-sidebar-right-expand-filled";
    }
  }

  export { isExpanded, position, expandedWidth, collapsedWidth };
</script>

<nav
  class={`flex flex-col justify-between transition-all ease-out duration-200 overflow-hidden bg-gray-300 h-full`}
  style="{isExpanded ? `width: ${expandedWidth}` : `width: ${collapsedWidth}`}">
  <div
    class={`flex justify-start items-start p-3 ${position === SidebarPosition.left ? "flex-row-reverse" : "flex-row"} h-16`}>
    <Button
      action={() => isExpanded = !isExpanded}
      icon={toggleIcon}
      textSize="3xl"
    />

    {#if isExpanded}
      {#if $$slots.expanded_top}
        <slot name="expanded_top" />
      {:else}
        <slot name="collapsed_top" />
      {/if}
    {:else}
      <slot name="collapsed_top" />
    {/if}
  </div>

  <div class="flex flex-col items-start justify-start p-3">
    {#if isExpanded}
      {#if $$slots.expanded_main}
        <slot name="expanded_main" />
      {:else}
        <slot name="collapsed_main" />
      {/if}
    {:else}
      <slot name="collapsed_main" />
    {/if}
  </div>

  <div
    class={`flex justify-start items-end p-3 ${position === SidebarPosition.left ? "flex-row-reverse" : "flex-row"} h-16`}>
    {#if isExpanded}
      {#if $$slots.expanded_bottom}
        <slot name="expanded_bottom" />
      {:else}
        <slot name="collapsed_bottom" />
      {/if}
    {:else}
      <slot name="collapsed_bottom" />
    {/if}
  </div>
</nav>
