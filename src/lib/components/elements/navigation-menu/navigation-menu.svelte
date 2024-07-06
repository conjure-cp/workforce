<script lang="ts">
  import { page } from "$app/stores";
  import { Button } from "$lib/components/ui/button";
  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
  import { SidebarPosition } from "$lib/components/ui/sidebar";
  import Icon from "@iconify/svelte";
  import { SettingsIcon } from "lucide-svelte";
  import type { Link } from "$lib/types/ui.ts";

  let links: Link[];
  let position: SidebarPosition = SidebarPosition.left;
  let collapsedWidth: string = "72px";
  let expandedWidth: string = "280px";
  let isExpanded: boolean = true;

  export { links, position, isExpanded };
</script>

<Sidebar position={position} collapsedWidth={collapsedWidth} expandedWidth={expandedWidth} isExpanded={isExpanded}>
  <h1 slot="expanded_top" class="font-bold py-1 text-3xl">Workforce Planning</h1>

  <ul slot="expanded_main" class="list-none p-0 m-0 w-full">
    {#each links as link}
      <li class="m-0 py-1 h-12">
        <Button href={link.href} variant={$page.url.pathname === link.href ? "default" : "ghost"} size="xl"
                class="w-full justify-start">
          {#if link.icon !== undefined}
            <Icon icon={link.icon} />
          {/if}
          {link.text}
        </Button>
      </li>
    {/each}
  </ul>

  <ul slot="collapsed_main" class="list-none p-0 m-0 w-full">
    {#each links as link}
      <li class="m-0 py-1 h-12">
        <Button href={link.href} variant={$page.url.pathname === link.href ? "default" : "ghost"} size="icon_xl">
          {#if link.icon !== undefined}
            <Icon icon={link.icon} />
          {:else}
            ?
          {/if}
        </Button>
      </li>
    {/each}
  </ul>

  <div slot="collapsed_bottom" class="flex w-full">
    <Button href="#" variant={$page.url.pathname === "/settings" ? "default" : "ghost"} size="icon_xl">
      <SettingsIcon />
    </Button>
  </div>

  <div slot="expanded_bottom" class="flex w-full">
    <Button href="#" variant={$page.url.pathname === "/settings" ? "default" : "ghost"} size="xl"
            class="w-full justify-start">
      <SettingsIcon />
      Settings
    </Button>
  </div>
</Sidebar>
