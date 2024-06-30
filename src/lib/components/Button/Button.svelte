<script lang="ts">
  import Icon, { type IconifyIcon } from "@iconify/svelte";

  let action: (() => void) | string = "#";
  let text: string = "";
  let icon: string | IconifyIcon | undefined = undefined;
  let active: boolean = false;
  let textSize: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" = "2xl";

  export { action, text, icon, active, textSize };
</script>

{#if typeof action === 'function'}
  <button
    on:click={action}
    class:active={active}
    class="outline-none text-black flex items-center font-normal text-{textSize} p-2 rounded-md hover:bg-gray-400 transition-all duration-200"
  >
    {#if icon !== undefined}
      <Icon icon={icon} />
    {/if}
    {#if text !== ""}
      <span class="ml-3">{text}</span>
    {/if}
  </button>
{:else}
  <a
    href={action}
    class:active={active}
    class="text-decoration-none text-black flex items-center font-normal text-2xl p-2 rounded-md hover:bg-gray-400 transition-all duration-200"
  >
    {#if icon !== undefined}
      <Icon icon={icon} />
    {/if}
    {#if text !== ""}
      <span class="ml-3">{text}</span>
    {/if}
  </a>
{/if}

<style>
  .active {
    @apply bg-black text-white;
  }
</style>