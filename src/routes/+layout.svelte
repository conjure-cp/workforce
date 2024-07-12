<script lang="ts">
  import "../app.css";

  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
  import NavigationMenu from "$lib/components/elements/navigation-menu/navigation-menu.svelte";
  import { SidebarPosition } from "$lib/components/ui/sidebar";
  import type { Link } from "$lib/types/ui.ts";
  import { base } from "$app/paths";

  let links: Link[] = [
    { text: "Shifts", href: `${base}/`, icon: "mdi:calendar" },
    { text: "Employees", href: `${base}/employees/`, icon: "mdi:account" },
    { text: "Tasks", href: `${base}/tasks/`, icon: "mdi:clipboard-list" },
    { text: "Locations", href: `${base}/locations/`, icon: "mdi:map-marker" },
    { text: "Skills", href: `${base}/skills/`, icon: "mdi:briefcase" },
    { text: "Dashboard", href: `${base}/dashboard/`, icon: "mdi:view-dashboard" }
  ];
</script>

<div class="h-screen w-screen flex flex-row">
  <NavigationMenu links={links} />

  <div class="bg-white w-full overflow-y-scroll">
    <slot />
  </div>

  <Sidebar position={SidebarPosition.right} />
</div>

<footer class="text-center">
  <h1 class="text-xl">My footer</h1>
</footer>