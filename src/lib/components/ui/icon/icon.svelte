<script lang="ts">
  import type { IconType } from "$lib/types/ui.ts";
  import Icon from "@iconify/svelte";

  let icon: IconType;
  let className: string = "";

  // noinspection ReservedWordAsName
  export { icon, className as class };
</script>

<Icon icon={icon.icon} class={className} style={icon.color ? `color: ${icon.color.hex()}` : ""} />
