<script lang="ts">
  import Icon from "@iconify/svelte";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import { SidebarPosition } from "$lib/components/Sidebar/types.ts";
  import type { Link } from "$lib/types.ts";

  let links: Link[];

  export { links };
</script>

<Sidebar position={SidebarPosition.left} expandedWidth="280px">
  <div slot="expanded_top" class="font-bold py-1 text-2xl">
    <h1>Workforce Planning</h1>
  </div>

  <ul slot="expanded_main" class="list-none p-0 m-0">
    {#each links as link}
      <li class="m-0 py-3">
        <a href={link.href} class="text-decoration-none text-black flex items-center font-normal text-2xl h-8">
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
      <li class="m-0 py-3">
        <a href={link.href} class="text-decoration-none text-black flex items-center font-normal text-2xl h-8">
          {#if link.icon !== undefined}
            <Icon icon={link.icon} />
          {/if}
        </a>
      </li>
    {/each}
  </ul>

  <a slot="collapsed_bottom" href="/static"
     class="text-decoration-none text-black flex items-center font-normal text-2xl w-full h-8">
    <Icon icon="mdi:settings" />
  </a>

  <a slot="expanded_bottom" href="/static"
     class="text-decoration-none text-black flex items-center font-normal text-2xl w-full h-8">
    <Icon icon="mdi:settings" class="mr-4" />
    Settings
  </a>
</Sidebar>