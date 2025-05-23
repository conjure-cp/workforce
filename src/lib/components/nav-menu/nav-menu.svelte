<!--
Sidebar component for  navigation.
TODO: add docs
-->
<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { state } from "$lib/model";
  import { misc } from "$lib/utils";
  import {
    CalendarRangeIcon,
    CalendarClockIcon,
    ClipboardListIcon,
    CodeXmlIcon,
    HomeIcon,
    MapPinIcon,
    SettingsIcon,
    TagIcon,
    UsersRoundIcon,
  } from "lucide-svelte";
  import { Sidebar, SidebarPosition } from "../sidebar";
  import { Button } from "../ui/button";

  const settings = state.settings;

  let position: SidebarPosition = SidebarPosition.left;
  let isExpanded = false;

  $: isActive = (href: string) => {
    const pageURL = misc.lstrip($page.url.pathname, base);
    const linkURL = misc.lstrip(href, base);
    if (href === "/") {
      return pageURL === linkURL;
    }
    return pageURL.startsWith(linkURL);
  };
</script>

<Sidebar bind:isExpanded {position}>
  <svelte:fragment slot="top">
    <h1
      class="overflow-hidden py-1 pl-3 text-3xl font-bold transition-all duration-300 {isExpanded
        ? 'w-[200px]'
        : 'w-0 !px-0'}"
    >
      Workforce Planning
    </h1>
  </svelte:fragment>

  <svelte:fragment slot="main">
    <li class="w-full">
      <Button
        class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
        href="{base}/"
        size={isExpanded ? "xl" : "icon-xl"}
        variant={isActive("/") ? "default" : "ghost"}
      >
        <HomeIcon class="min-w-8" />
        <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}"
          >{isExpanded ? "Home" : ""}</span
        >
      </Button>
    </li>
    <li class="w-full">
      <Button
        class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
        href="{base}/assignments/"
        size={isExpanded ? "xl" : "icon-xl"}
        variant={isActive("/assignments/") ? "default" : "ghost"}
      >
        <CalendarRangeIcon class="min-w-8" />
        <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">Assignments</span>
      </Button>
    </li>
    <li class="w-full">
      <Button
        class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
        href="{base}/shifts/"
        size={isExpanded ? "xl" : "icon-xl"}
        variant={isActive("/shifts/") ? "default" : "ghost"}
      >
        <CalendarClockIcon class="min-w-8" />
        <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">Shifts</span>
      </Button>
    </li>
    <li class="w-full">
      <Button
        class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
        href="{base}/people/"
        size={isExpanded ? "xl" : "icon-xl"}
        variant={isActive("/people/") ? "default" : "ghost"}
      >
        <UsersRoundIcon class="min-w-8" />
        <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">People</span>
      </Button>
    </li>
    <li class="w-full">
      <Button
        class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
        href="{base}/locations/"
        size={isExpanded ? "xl" : "icon-xl"}
        variant={isActive("/locations/") ? "default" : "ghost"}
      >
        <MapPinIcon class="min-w-8" />
        <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">Locations</span>
      </Button>
    </li>
    <li class="w-full">
      <Button
        class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
        href="{base}/properties/"
        size={isExpanded ? "xl" : "icon-xl"}
        variant={isActive("/properties/") ? "default" : "ghost"}
      >
        <TagIcon class="min-w-8" />
        <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">Properties</span>
      </Button>
    </li>
    {#if $settings.assignmentMode === "granular"}
      <li class="w-full">
        <Button
          class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
          href="{base}/tasks/"
          size={isExpanded ? "xl" : "icon-xl"}
          variant={isActive("/tasks/") ? "default" : "ghost"}
        >
          <ClipboardListIcon class="min-w-8" />
          <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">Tasks</span>
        </Button>
      </li>
    {/if}
    {#if $settings.development}
      <li class="w-full">
        <Button
          class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : ''}"
          href="{base}/ui_playground/"
          size={isExpanded ? "xl" : "icon-xl"}
          variant={isActive("/ui_playground/") ? "default" : "ghost"}
        >
          <CodeXmlIcon class="min-w-8" />
          <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">UI Playground</span>
        </Button>
      </li>
    {/if}
  </svelte:fragment>

  <svelte:fragment slot="bottom">
    <Button
      href="{base}/settings/"
      size={isExpanded ? "xl" : "icon-xl"}
      variant={isActive("/settings/") ? "default" : "ghost"}
      class="transition-all duration-300 {isExpanded ? 'w-full justify-start' : 'ml-auto mr-auto'}"
    >
      <SettingsIcon class="min-w-8" />
      <span class="overflow-hidden {isExpanded ? 'w-auto' : 'hidden w-0'}">Settings</span>
    </Button>
  </svelte:fragment>
</Sidebar>
