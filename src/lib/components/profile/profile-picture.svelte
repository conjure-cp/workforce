<script lang="ts" generics="T extends Display">
  import { Chip } from "../chip";

  import * as Avatar from "$lib/components/ui/avatar";
  import IconElement from "$lib/components/icon/icon.svelte";
  import { Icon, type Display } from "$lib/ui";
  import { misc } from "$lib/utils";
  import { DEFAULT_COLOR, PFP_HEIGHT, PFP_WIDTH, type Size } from ".";

  let item: T | undefined = undefined;
  let size: Size = "md";
  let defaultIcon: Icon | undefined = undefined;
  let emptyIcon: Icon | undefined = undefined;
  let className = "";

  $: width = PFP_WIDTH[size];
  $: height = PFP_HEIGHT[size];

  export { className as class, item, size, defaultIcon, emptyIcon };
</script>

{#if item}
  {#if item.avatar}
    <Avatar.Root
      class="outline-none outline-offset-0 hover:outline-accent-foreground {width} {height} {className}"
    >
      <Avatar.Image alt={item.name} src={item.avatar.href} class="rounded-full" />
      <Avatar.Fallback>{misc.getInitials(item.name)}</Avatar.Fallback>
    </Avatar.Root>
  {:else if item.icon}
    {@const color = item.icon.color ?? DEFAULT_COLOR}
    <Chip {size} {color} variant="default" class="my-0.5 {className}">
      <IconElement slot="icon" icon={item.icon} color={null} />
    </Chip>
  {:else if defaultIcon}
    <Chip
      {size}
      color={defaultIcon.color ?? DEFAULT_COLOR}
      variant="default"
      class="my-0.5 {className}"
    >
      <IconElement slot="icon" icon={defaultIcon} color={null} />
    </Chip>
  {/if}
{:else if emptyIcon}
  <Chip
    {size}
    color={emptyIcon.color ?? DEFAULT_COLOR}
    variant="outline"
    class="my-0.5 {className}"
  >
    <IconElement slot="icon" icon={emptyIcon} color={null} />
  </Chip>
{:else if defaultIcon}
  <Chip
    {size}
    color={defaultIcon.color ?? DEFAULT_COLOR}
    variant="outline"
    class="my-0.5 {className}"
  >
    <IconElement slot="icon" icon={defaultIcon} color={null} />
  </Chip>
{/if}
