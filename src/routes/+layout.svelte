<script lang="ts">
  import "../app.css";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import LeftMenu from "$lib/components/NavigationMenu/NavigationMenu.svelte";

  import { SidebarPosition } from "$lib/components/Sidebar/types.ts";
  import type { Link } from "$lib/types.ts";

  let links: Link[] = [
    { text: "Shifts", href: "/", icon: "mdi:calendar" },
    { text: "Employees", href: "/employees", icon: "mdi:account" },
    { text: "Tasks", href: "/tasks", icon: "mdi:clipboard-list" },
    { text: "Locations", href: "/locations", icon: "mdi:map-marker" },
    { text: "Skills", href: "/skills", icon: "mdi:briefcase" },
    { text: "Dashboard", href: "/dashboard", icon: "mdi:view-dashboard" }
  ];
</script>

<div class="content">
  <LeftMenu links={links} />

  <main>
    <slot />
  </main>

  <Sidebar position={SidebarPosition.right} />
</div>

<footer>
  <h1>My footer</h1>
</footer>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .content {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
  }

  main {
    background: #FFFFFF;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
  }
</style>