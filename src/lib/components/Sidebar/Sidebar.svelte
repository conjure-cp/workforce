<script lang="ts">
  import Icon from "@iconify/svelte";
  import { SidebarPosition } from "$lib/components/Sidebar/types";

  let isExpanded: boolean = false;
  let position: SidebarPosition;
  let expandedWidth: string = "250px";
  let collapsedWidth: string = "72px";

  export { isExpanded, position, expandedWidth, collapsedWidth };
</script>

<nav
  class={`flex flex-col justify-between transition-all ease-out duration-200 overflow-hidden bg-gray-300 h-full`}
  style="{isExpanded ? `width: ${expandedWidth}` : `width: ${collapsedWidth}`}">
  <div
    class={`flex justify-start items-start p-3 ${position === SidebarPosition.left ? "flex-row-reverse" : "flex-row"} h-16`}>
    <button on:click={() => isExpanded = !isExpanded} class="p-1 rounded hover:bg-gray-200 focus:outline-none">
      {#if position === SidebarPosition.right}
        {#if isExpanded}
          <Icon icon="tabler:layout-sidebar-right-collapse-filled" width="32px" height="32px" />
        {:else}
          <Icon icon="tabler:layout-sidebar-right-expand-filled" width="32px" height="32px" />
        {/if}
      {:else}
        {#if isExpanded}
          <Icon icon="tabler:layout-sidebar-left-collapse-filled" width="32px" height="32px" />
        {:else}
          <Icon icon="tabler:layout-sidebar-left-expand-filled" width="32px" height="32px" />
        {/if}
      {/if}
    </button>

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