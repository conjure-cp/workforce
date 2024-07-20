<script lang="ts">
  import { SidebarPosition } from "$lib/components/ui/sidebar/index.ts";
  import { Button } from "$lib/components/ui/button";
  import { PanelLeftCloseIcon, PanelLeftOpenIcon, PanelRightCloseIcon } from "lucide-svelte";

  let isExpanded: boolean = false;
  let position: SidebarPosition;
  let expandedWidth: string = "250px";
  let collapsedWidth: string = "72px";

  export { isExpanded, position, expandedWidth, collapsedWidth };
</script>

<nav
  class="flex flex-col justify-between transition-all ease-out duration-200 overflow-hidden bg-gray-300 h-full z-20"
  style="{isExpanded ? `width: ${expandedWidth}` : `width: ${collapsedWidth}`}">
  <div
    class={`flex justify-start items-start p-3 ${position === SidebarPosition.left ? "flex-row-reverse" : "flex-row"} h-16`}>
    <Button on:click={() => {isExpanded = !isExpanded}} variant="ghost" size="icon_xxl">
      {#if position === SidebarPosition.left}
        {#if isExpanded}
          <PanelLeftCloseIcon />
        {:else }
          <PanelLeftOpenIcon />
        {/if  }
      {:else }
        {#if isExpanded}
          <PanelRightCloseIcon />
        {:else }
          <PanelLeftCloseIcon />
        {/if  }
      {/if}
    </Button>

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
