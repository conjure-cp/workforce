<!--
Wrapper for Iconify icons.
Used with our Icon type. (See $lib/ui/Icon)

## Props
- `icon`: The icon to display.
- `inline`: If true, the icon will be positioned inline with the text. Default: false.
- `width`: The width of the icon (CSS string). Default: "1em".
- `height`: The height of the icon (CSS string). Default: "1em".
- `color`: Override the icon color (see below). Default: undefined.
- `class`: Additional CSS classes to apply to the icon.

## Color
The possible values for the `color` prop are:
- `Color` or `string`: always use this color, regardless of the text color or the `icon.color` property.
- `undefined`: use `icon.color` (if specified) or the text color. (Default)
- `null`: always use the text color, regardless of the `icon.color` property.

See also: [Iconify docs](https://iconify.design/docs/icon-components/svelte/)
-->

<script lang="ts">
  import { Icon as TIcon } from "$lib/ui";
  import Icon from "@iconify/svelte";
  import Color from "color";

  let icon: TIcon;
  let inline = false;
  let width: string | number = "1em";
  let height: string | number = "1em";
  let color: Color | string | undefined | null = undefined;
  let className = "";

  let clr: string | undefined = undefined;
  $: {
    if (color instanceof Color) {
      clr = color.hex();
    } else if (typeof color === "string") {
      clr = color;
    } else if (color === null) {
      clr = undefined;
    } else {
      clr = icon.color?.hex();
    }
  }

  // noinspection ReservedWordAsName
  export { icon, inline, width, height, color, className as class };
</script>

<Icon color={clr} icon={icon.name} {inline} {width} {height} class={className} />
