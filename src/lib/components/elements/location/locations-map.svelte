<script lang="ts">
  import { MapLibre } from "svelte-maplibre";
  import { locations } from "$lib/stores.ts";
  import { findBoundingBox } from "$lib/utils.ts";
  import LocationMapMarker from "$lib/components/elements/location/location-map-marker.svelte";
  import type { Location } from "$lib/types/core.ts";

  let locs: Location[] = $locations;
  let className: string = "";

  export { locs as locations, className as class };
</script>

<MapLibre
  style={"https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"}
  class={className}
  bounds={findBoundingBox(locs.map((l) => l.coordinates))}
  standardControls={true}>
  {#each locs as location}
    {#if location.coordinates}
      <LocationMapMarker {location} />
    {/if}
  {/each}
</MapLibre>