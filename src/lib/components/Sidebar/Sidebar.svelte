<script lang="ts">
  import Icon from "@iconify/svelte";
  import { SidebarPosition } from "$lib/components/Sidebar/types";

  let isExpanded: boolean = false;
  let position: SidebarPosition;
  let expandedWidth: string = "250px";
  let collapsedWidth: string = "68px";

  export { isExpanded, position, expandedWidth, collapsedWidth };
</script>

<nav class:expanded={isExpanded} class={position} style="width: {isExpanded ? expandedWidth : collapsedWidth}">
  <div class="sidebar-top">
    <button on:click={() => isExpanded = !isExpanded} class="sidebar-toggle">
      {#if position === SidebarPosition.right}
        {#if isExpanded}
          <Icon icon="tabler:layout-sidebar-left-expand-filled" width="32px" height="32px" />
        {:else}
          <Icon icon="tabler:layout-sidebar-left-collapse-filled" width="32px" height="32px" />
        {/if}
      {:else}
        {#if isExpanded}
          <Icon icon="tabler:layout-sidebar-right-expand-filled" width="32px" height="32px" />
        {:else}
          <Icon icon="tabler:layout-sidebar-right-collapse-filled" width="32px" height="32px" />
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

  <div class="sidebar-main">
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

  <div class="sidebar-bottom">
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

<style>
  nav {
    height: 100%;
    transition: ease-out 200ms;
    width: 72px;
    overflow: hidden;
    background: #E0E0E0;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
  }

  .expanded {
    width: 250px;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 4px 4px 2px 4px;
    border-radius: 8px;
    background-color: transparent;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }

  .sidebar-top, .sidebar-main, .sidebar-bottom {
    display: flex;
    padding: 16px;
  }

  .sidebar-top, .sidebar-bottom {
    flex-direction: row-reverse;
    align-items: start;
  }

  .sidebar-right > .sidebar-top, .sidebar-right > .sidebar-bottom {
    flex-direction: row;
  }

  .sidebar-main {
    flex-direction: column;
    align-items: start;
    justify-content: start;
  }

  .sidebar-top {
    height: 64px;
  }
</style>