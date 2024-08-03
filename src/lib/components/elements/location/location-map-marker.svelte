<script lang="ts">
  import { Marker, Popup } from "svelte-maplibre";
  import { MapPinIcon } from "lucide-svelte";
  import type { Location } from "$lib/types";

  let location: Location;
  let className: string = "";

  export { location, className as class };
</script>

<Marker lngLat={location.coordinates} class={className}>
  {#if location.image_url}
    <div class="relative w-10 h-10 group">
      <img src={location.image_url} alt={location.name}
           class="absolute top-0 left-0 rounded-full h-10 w-10 outline outline-2 outline-offset-0 outline-muted-foreground shadow cursor-pointer group-hover:outline-3 group-hover:outline-accent-foreground transition-all z-20" />
      <div
        class="absolute -bottom-4 left-1/4 w-0 h-0 border-[10px] border-transparent border-t-muted-foreground group-hover:border-t-accent-foreground z-10"></div>
    </div>
  {:else}
    <MapPinIcon
      class="rounded-full h-10 w-10 p-1 outline-none outline-offset-0 cursor-pointer bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:outline-accent-foreground transition-all" />

  {/if}

  <Popup openOn="hover" offset={[0, -25]}>
    <h3 class="font-semibold">{location.name}</h3>
    <p class="text-muted-foreground">{location.address}</p>
  </Popup>
</Marker>