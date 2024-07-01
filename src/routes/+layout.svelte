<script lang="ts">
  import "../app.css";

  import Sidebar from "$lib/components/Sidebar/Sidebar.svelte";
  import LeftMenu from "$lib/components/NavigationMenu.svelte";

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

<div class="h-screen w-screen flex flex-row">
  <LeftMenu links={links} />

  <main class="bg-white w-full h-full overflow-y-scroll">
    <slot />
  </main>

  <Sidebar position={SidebarPosition.right} />
</div>

<footer class="text-center">
  <h1 class="text-xl">My footer</h1>
</footer>