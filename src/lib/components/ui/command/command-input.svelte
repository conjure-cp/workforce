<script lang="ts">
  import { Command as CommandPrimitive } from "cmdk-sv";
  import Search from "lucide-svelte/icons/search";
  import { cn } from "$lib/utils.js";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type $$Props = CommandPrimitive.InputProps;

  let value: string = "";
  let className: string | undefined | null = undefined;

  // noinspection ReservedWordAsName
  export { value, className as class };
</script>

<div class="flex items-center border-b px-2" data-cmdk-input-wrapper="">
  <Search class="mr-2 h-5 w-5 shrink-0 opacity-50" />
  <CommandPrimitive.Input
    class={cn(
			"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
    {...$$restProps}
    bind:value
  />
</div>
