<script lang="ts">
  import { Avatar as AvatarPrimitive } from "bits-ui";
  import { cn } from "$lib/utils/ui.js";

  type $$Props = AvatarPrimitive.Props;

  let className: $$Props["class"] = undefined;
  let delayMs: $$Props["delayMs"] = undefined;

  // noinspection ReservedWordAsName
  export { delayMs, className as class };
</script>

<AvatarPrimitive.Root
  {delayMs}
  class={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
  {...$$restProps}
>
  <slot />
</AvatarPrimitive.Root>
