<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "$app/stores";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import { SidebarPosition } from "$lib/components/Sidebar/types.ts";
  import type { Link } from "$lib/types.ts";

  let links: Link[];

  export { links };
</script>

<Sidebar position={SidebarPosition.left} expandedWidth="280px">
  <div slot="expanded_top" class="font-bold py-1 text-3xl">
    <h1>Workforce Planning</h1>
  </div>

  <ul slot="expanded_main" class="list-none p-0 m-0">
    {#each links as link}
      <li class="m-0 py-1">
        <a href={link.href}
           class:active={$page.url.pathname === link.href}
           class="text-decoration-none text-black flex items-center font-normal text-2xl px-2 py-1 rounded-md h-fit hover:bg-gray-400 transition-all duration-200">
          {#if link.icon !== undefined}
            <Icon icon={link.icon} class="mr-4" />
          {/if}

          {link.text}
        </a>
      </li>
    {/each}
  </ul>

  <ul slot="collapsed_main" class="list-none p-0 m-0">
    {#each links as link}
      <li class="m-0 py-1">
        <a href={link.href}
           class:active={$page.url.pathname === link.href}
           class="text-decoration-none text-black flex items-center font-normal text-2xl p-2 rounded-md h-fit hover:bg-gray-400 transition-all duration-200">
          {#if link.icon !== undefined}
            <Icon icon={link.icon} />
          {/if}
        </a>
      </li>
    {/each}
  </ul>

  <a slot="collapsed_bottom" href="/"
     class="text-decoration-none text-black flex items-center font-normal text-2xl w-full p-2 rounded-md h-fit hover:bg-gray-400 transition-all duration-200">
    <Icon icon="mdi:settings" />
  </a>

  <a slot="expanded_bottom" href="/"
     class="text-decoration-none text-black flex items-center font-normal text-2xl w-full p-2 rounded-md h-fit hover:bg-gray-400 transition-all duration-200">
    <Icon icon="mdi:settings" class="mr-4" />
    Settings
  </a>
</Sidebar>

<style>
  .active {
    @apply bg-black text-white;
  }
</style>