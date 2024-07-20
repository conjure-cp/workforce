<script lang="ts">
  import { Avatar as AvatarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils.js";

  type $$Props = AvatarPrimitive.ImageProps;

  let className: $$Props["class"] = undefined;
  let src: $$Props["src"] = undefined;
  let alt: $$Props["alt"] = undefined;

  // noinspection ReservedWordAsName
  export { src, alt, className as class };
</script>

<AvatarPrimitive.Image
  {src}
  {alt}
  class={cn("aspect-square h-full w-full", className)}
  {...$$restProps}
/>
