<script lang="ts">
  import "../app.css";
  import NavigationMenu from "$lib/components/elements/navigation-menu/navigation-menu.svelte";
  import type { Link } from "$lib/types/ui.ts";
  import { base } from "$app/paths";

  let links: Link[] = [
    { text: "Shifts", href: `${base}/`, icon: { icon: "mdi:calendar" } },
    { text: "Employees", href: `${base}/employees/`, icon: { icon: "mdi:account" } },
    { text: "Tasks", href: `${base}/tasks/`, icon: { icon: "mdi:clipboard-list" } },
    { text: "Locations", href: `${base}/locations/`, icon: { icon: "mdi:map-marker" } },
    { text: "Skills", href: `${base}/skills/`, icon: { icon: "mdi:briefcase" } },
    { text: "Dashboard", href: `${base}/dashboard/`, icon: { icon: "mdi:view-dashboard" } }
  ];
</script>

<div class="h-screen w-screen flex flex-row">
  <NavigationMenu links={links} />
  <slot />
</div>

<footer class="text-center">
  <h1 class="text-xl">My footer</h1>
</footer>