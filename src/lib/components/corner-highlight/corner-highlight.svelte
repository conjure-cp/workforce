<!--
# Color Highlight Component

Helper component that wraps the given content in a rectangular div with one corner highlighted by a colored triangle.
Designed for use inside of tables, cards, or similar.

## Props:
- `highlightColor`: The color of the highlight. Can be a string or a Color object. Defaults to "#ff3e00" (orange).
- `cornerSize`: Size of the corner highlight. Can be a CSS string (e.g. "30px", "2rem") or a number (e.g. 30 - equivalent to "30px"). Defaults to "30px".
- `cornerOpacity`: Opacity of the corner highlight. Defaults to 1 (fully opaque).
- `position`: Which corner to highlight. Defaults to `top-left`.
- `contentClass`: Additional Tailwind classes to apply to the content area.
- `class`: Additional Tailwind classes to apply to the container.
-->

<script lang="ts">
  import Color from "color";

  // Define the position types
  type CornerPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";

  // Props with default values
  export let highlightColor: Color | string = "#ff3e00";
  export let cornerSize = "30px";
  export let cornerOpacity = 1;
  export let position: CornerPosition = "top-left";
  export let contentClass = "";
  let className = "";

  // Interface for corner styles
  interface CornerStyle {
    position: string;
    width: string;
    height: string;
    backgroundColor: string;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    clipPath?: string;
    opacity?: number;
  }

  // Reactive declaration for corner styles
  $: cornerStyles = getCornerStyles();

  function getCornerStyles(): CornerStyle {
    const baseStyles: CornerStyle = {
      position: "absolute",
      opacity: cornerOpacity,
      width: cornerSize,
      height: cornerSize,
      backgroundColor: highlightColor instanceof Color ? highlightColor.hex() : highlightColor,
    };

    switch (position) {
      case "top-left":
        return { ...baseStyles, top: 0, left: 0, clipPath: "polygon(0 0, 100% 0, 0 100%)" };
      case "top-right":
        return { ...baseStyles, top: 0, right: 0, clipPath: "polygon(100% 0, 0 0, 100% 100%)" };
      case "bottom-left":
        return { ...baseStyles, bottom: 0, left: 0, clipPath: "polygon(0 100%, 100% 100%, 0 0)" };
      case "bottom-right":
        return {
          ...baseStyles,
          bottom: 0,
          right: 0,
          clipPath: "polygon(100% 100%, 100% 0, 0 100%)",
        };
      default:
        return { ...baseStyles, top: 0, left: 0, clipPath: "polygon(0 0, 100% 0, 0 100%)" };
    }
  }

  export { className as class };
</script>

<div class="container overflow-hidden bg-background {className}">
  <div
    class="corner"
    style="
    opacity: {cornerStyles.opacity !== undefined ? cornerStyles.opacity : 1};
    width: {cornerStyles.width};
    height: {cornerStyles.height};
    background-color: {cornerStyles.backgroundColor};
    top: {cornerStyles.top || 'auto'};
    left: {cornerStyles.left || 'auto'};
    right: {cornerStyles.right || 'auto'};
    bottom: {cornerStyles.bottom || 'auto'};
    clip-path: {cornerStyles.clipPath || 'none'};
  "
  >
    <slot name="corner" />
  </div>
  <div class="content {contentClass}">
    <slot />
  </div>
</div>

<style>
  .container {
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
  }

  .corner {
    position: absolute;
    z-index: 2;
  }

  .content {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>
