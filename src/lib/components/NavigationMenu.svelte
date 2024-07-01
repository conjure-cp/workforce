<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import { page } from "$app/stores";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import { SidebarPosition } from "$lib/components/Sidebar/lib/types.ts";
  import type { Link } from "$lib/types.ts";

  let links: Link[];
  let position: SidebarPosition = SidebarPosition.left;
  let collapsedWidth: string = "72px";
  let expandedWidth: string = "280px";
  let isExpanded: boolean = true;

  export { links, position, isExpanded };
</script>

<Sidebar position={position} collapsedWidth={collapsedWidth} expandedWidth={expandedWidth} isExpanded={isExpanded}>
  <div slot="expanded_top" class="font-bold py-1 text-3xl">
    <h1>Workforce Planning</h1>
  </div>

  <ul slot="expanded_main" class="list-none p-0 m-0 w-full">
    {#each links as link}
      <li class="m-0 py-1 h-12">
        <Button
          action={link.href}
          active={$page.url.pathname === link.href}
          text={link.text}
          icon={link.icon}
        />
      </li>
    {/each}
  </ul>

  <ul slot="collapsed_main" class="list-none p-0 m-0 w-full">
    {#each links as link}
      <li class="m-0 py-1 h-12">
        <Button
          action={link.href}
          active={$page.url.pathname === link.href}
          icon={link.icon}
        />
      </li>
    {/each}
  </ul>

  <div slot="collapsed_bottom" class="flex w-full">
    <Button
      action="/"
      icon="mdi:settings"
    />
  </div>

  <div slot="expanded_bottom" class="flex w-full">
    <Button
      action="/"
      icon="mdi:settings"
      text="Settings"
    />
  </div>
</Sidebar>
