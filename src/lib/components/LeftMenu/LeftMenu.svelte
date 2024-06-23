<script lang="ts">
  import Icon from "@iconify/svelte";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import { SidebarPosition } from "$lib/components/Sidebar/types.ts";
  import type { Link } from "$lib/types.ts";

  let links: Link[];

  export { links };
</script>

<Sidebar position={SidebarPosition.left} expandedWidth="280px">
  <div slot="expanded_top">
    <h1>Workforce Planning</h1>
  </div>

  <ul slot="expanded_main">
    {#each links as link}
      <li>
        <a href={link.href}>
          {#if link.icon !== undefined}
            <span class="link-icon">
              <Icon icon={link.icon} />
            </span>
          {/if}

          <span class="link-text">
            {link.text}
          </span>
        </a>
      </li>
    {/each}
  </ul>

  <ul slot="collapsed_main">
    {#each links as link}
      <li>
        <a href={link.href}>
          {#if link.icon !== undefined}
            <span class="link-icon">
              <Icon icon={link.icon} />
            </span>
          {/if}
        </a>
      </li>
    {/each}
  </ul>

  <a slot="collapsed_bottom" href="/static" class="settings">
    <span class="link-icon">
      <Icon icon="mdi:settings" />
    </span>
  </a>

  <a slot="expanded_bottom" href="/static" class="settings">
    <span class="link-icon">
      <Icon icon="mdi:settings" />
    </span>

    <span class="link-text">
      Settings
    </span>
  </a>
</Sidebar>

<style>
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  h1 {
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    padding: 4px 0 0;
  }

  li {
    margin: 0;
    padding: 12px 0;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 28px;
    font-weight: normal;
    height: 32px;
  }

  a:hover {
    color: blue;
  }

  .settings {
    width: 100%;
  }

  .link-icon {
    display: flex;
    margin-right: 16px;
  }
</style>