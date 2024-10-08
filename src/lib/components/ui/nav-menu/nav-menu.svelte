<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { state } from "$lib/model";
  import { misc } from "$lib/model/utils";
  import {
    BriefcaseBusinessIcon,
    CalendarRangeIcon,
    ClipboardListIcon,
    CodeXmlIcon,
    HomeIcon,
    MapPinIcon,
    SettingsIcon,
    UsersRoundIcon
  } from "lucide-svelte";
  import { Button } from "../button";
  import { Sidebar, SidebarPosition } from "../sidebar";

  let expandedWidth: string = "280px";
  let collapsedWidth: string = "72px";
  let position: SidebarPosition = SidebarPosition.left;
  let isExpanded: boolean = false;

  const settings = state.settings;

  $: isActive = (href: string) => {
    const pageURL = misc.lstrip($page.url.pathname, base);
    const linkURL = misc.lstrip(href, base);

    if (href === "/") {
      return pageURL === linkURL;
    }
    return pageURL.startsWith(linkURL);
  };
</script>

<Sidebar {collapsedWidth} {expandedWidth} {isExpanded} {position}>
  <h1 class="w-[200px] py-1 pl-3 text-3xl font-bold" slot="expanded_top">Workforce Planning</h1>

  <ul class="m-0 w-full list-none p-0" slot="expanded_main">
    <li>
      <Button
        class="w-full justify-start"
        href="{base}/"
        size="xl"
        variant={isActive("/") ? "default" : "ghost"}
      >
        <HomeIcon />
        Home
      </Button>
    </li>
    <li>
      <Button
        class="w-full justify-start"
        href="{base}/shifts/"
        size="xl"
        variant={isActive("/shifts/") ? "default" : "ghost"}
      >
        <CalendarRangeIcon />
        Shifts
      </Button>
    </li>
    <li>
      <Button
        class="w-full justify-start"
        href="{base}/people/"
        size="xl"
        variant={isActive("/people/") ? "default" : "ghost"}
      >
        <UsersRoundIcon />
        People
      </Button>
    </li>
    <li>
      <Button
        class="w-full justify-start"
        href="{base}/locations/"
        size="xl"
        variant={isActive("/locations/") ? "default" : "ghost"}
      >
        <MapPinIcon />
        Locations
      </Button>
    </li>
    <li>
      <Button
        class="w-full justify-start"
        href="{base}/skills/"
        size="xl"
        variant={isActive("/skills/") ? "default" : "ghost"}
      >
        <BriefcaseBusinessIcon />
        Skills
      </Button>
    </li>
    {#if $settings.assignmentMode === "granular"}
      <li>
        <Button
          class="w-full justify-start"
          href="{base}/tasks/"
          size="xl"
          variant={isActive("/tasks/") ? "default" : "ghost"}
        >
          <ClipboardListIcon />
          Tasks
        </Button>
      </li>
    {/if}
    {#if $settings.development}
      <li>
        <Button
          class="w-full justify-start"
          href="{base}/ui_playground/"
          size="xl"
          variant={isActive("/ui_playground/") ? "default" : "ghost"}
        >
          <CodeXmlIcon />
          UI Components
        </Button>
      </li>
    {/if}
    <!-- <Button
      class="w-full justify-start"
      href="{base}/dashboard/"
      size="xl"
      variant={isActive("/dashboard/") ? "default" : "ghost"}
    >
      <LayoutDashboardIcon />
      Dashboard
    </Button> -->
  </ul>

  <ul class="m-0 w-full list-none p-0" slot="collapsed_main">
    <li>
      <Button href="{base}/" size="icon-xl" variant={isActive("/") ? "default" : "ghost"}>
        <HomeIcon />
      </Button>
    </li>
    <li>
      <Button
        href="{base}/shifts/"
        size="icon-xl"
        variant={isActive("/shifts/") ? "default" : "ghost"}
      >
        <CalendarRangeIcon />
      </Button>
    </li>
    <li>
      <Button
        href="{base}/people/"
        size="icon-xl"
        variant={isActive("/people/") ? "default" : "ghost"}
      >
        <UsersRoundIcon />
      </Button>
    </li>
    <li>
      <Button
        href="{base}/locations/"
        size="icon-xl"
        variant={isActive("/locations/") ? "default" : "ghost"}
      >
        <MapPinIcon />
      </Button>
    </li>
    <li>
      <Button
        href="{base}/skills/"
        size="icon-xl"
        variant={isActive("/skills/") ? "default" : "ghost"}
      >
        <BriefcaseBusinessIcon />
      </Button>
    </li>
    {#if $settings.assignmentMode === "granular"}
      <li>
        <Button
          href="{base}/tasks/"
          size="icon-xl"
          variant={isActive("/tasks/") ? "default" : "ghost"}
        >
          <ClipboardListIcon />
        </Button>
      </li>
    {/if}
    {#if $settings.development}
      <li>
        <Button
          href="{base}/ui_playground/"
          size="icon-xl"
          variant={isActive("/ui_playground/") ? "default" : "ghost"}
        >
          <CodeXmlIcon />
        </Button>
      </li>
    {/if}
    <!-- <Button
      href="{base}/dashboard/"
      size="icon-xl"
      variant={isActive("/dashboard/") ? "default" : "ghost"}
    >
      <LayoutDashboardIcon />
    </Button> -->
  </ul>

  <div class="flex w-full" slot="collapsed_bottom">
    <Button
      href="{base}/settings/"
      size="icon-xl"
      variant={isActive("/settings/") ? "default" : "ghost"}
    >
      <SettingsIcon />
    </Button>
  </div>

  <div class="flex w-full" slot="expanded_bottom">
    <Button
      class="w-full justify-start"
      href="{base}/settings/"
      size="xl"
      variant={isActive("/settings/") ? "default" : "ghost"}
    >
      <SettingsIcon />
      Settings
    </Button>
  </div>
</Sidebar>
