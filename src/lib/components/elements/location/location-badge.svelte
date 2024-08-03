<!--suppress ES6UnusedImports -->
<script lang="ts">
  import type { Location } from "$lib/types";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { MapPinIcon, PlusIcon } from "lucide-svelte";

  let location: Location | undefined = undefined;
  let popoverEnabled: boolean = true;
  let placeholder: string = "Unassigned";
  let variant: "default" | "destructive" = "default";
  let icon_variant: "default" | "placeholder" | "plus" = "default";
  let className: string = "";

  // noinspection ReservedWordAsName
  export { location, placeholder, popoverEnabled, variant, className as class };
</script>

<Tooltip.Root>
  {#if location === undefined}
    <Tooltip.Trigger class={className}>
      <div
        class="group/avatar relative h-10 w-10 overflow-hidden rounded-full outline-none outline-offset-0 transition-all {variant === 'destructive' ? 'text-destructive hover:outline-destructive bg-red-100' : 'text-muted-foreground hover:text-accent-foreground hover:outline-accent-foreground bg-muted'}">
        {#if icon_variant === "default"}
          <MapPinIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 group-hover/avatar:opacity-0 transition-all" />
          <PlusIcon class="absolute top-1 left-1 h-8 w-8 opacity-0 group-hover/avatar:opacity-100 transition-all" />
        {:else if icon_variant === "placeholder"}
          <MapPinIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 transition-all" />
        {:else if icon_variant === "plus"}
          <PlusIcon class="absolute top-1 left-1 h-8 w-8 opacity-100 transition-all" />
        {/if}
      </div>
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content>
        {placeholder}
      </Tooltip.Content>
    {/if}
  {:else}
    <Tooltip.Trigger class={className}>
      {#if location.image_url}
        <img src={location.image_url} alt={location.name}
             class="rounded-full h-10 w-10 outline-none outline-offset-0 shadow cursor-pointer transition-all z-20 {variant === 'destructive' ? 'text-destructive hover:outline-destructive' : 'hover:outline-accent-foreground'}" />

      {:else}
        <MapPinIcon
          class="rounded-full h-10 w-10 p-1 outline-none outline-offset-0 cursor-pointer bg-transparent transition-all {variant === 'destructive' ? 'text-destructive bg-red-100 hover:outline-destructive' : 'text-muted-foreground bg-muted hover:text-accent-foreground hover:outline-accent-foreground'}" />
      {/if}
    </Tooltip.Trigger>
    {#if popoverEnabled}
      <Tooltip.Content class="max-w-[200px]">
        <h3 class="font-semibold">{location.name}</h3>
        <p class="text-muted-foreground">{location.address}</p>
      </Tooltip.Content>
    {/if}
  {/if}
</Tooltip.Root>
