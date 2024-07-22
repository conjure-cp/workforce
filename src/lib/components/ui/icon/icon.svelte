<script lang="ts">
  import type { IconType } from "$lib/types/ui.ts";
  import Icon from "@iconify/svelte";

  let icon: IconType;
  let className: string = "";
  let variant: "color" | "monochrome" = "color";

  // noinspection ReservedWordAsName
  export { icon, variant, className as class };
</script>

<Icon icon={icon.icon} class={className}
      style={(icon.color && variant !== "monochrome") ? `color: ${icon.color.hex()}` : ""} />
