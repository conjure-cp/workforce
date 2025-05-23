<!--
Displays an interactive OSM map with location markers.

TODO: better docs
-->
<script lang="ts">
  import { Location } from "$lib/model";
  import { Geopoint, type LngLat, findBoundingBox } from "$lib/model/geocoding";
  import { MapLibre } from "svelte-maplibre";
  import type { MapMouseEvent } from "maplibre-gl";
  import MapMarker from "./map-marker.svelte";
  import { debounce } from "$lib/utils/misc";
  import { mode } from "mode-watcher";

  export let locations: (Location | Geopoint)[] = [];
  export let draggable = false;
  export let disabled = false;
  export let debounceDelay = 300;
  export let onMarkerClick: (location: Location | Geopoint) => void = () => {};
  export let onMarkerDrag: (point: Geopoint) => void = () => {};
  export let onMapClick: (coords: LngLat) => void = () => {};
  export let id: string | undefined = undefined;
  let className = "";

  $: coords = locations.map((l) => getCoords(l)).filter((c) => c !== undefined) as LngLat[];
  $: mapTheme =
    $mode === "dark"
      ? "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      : "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

  function getCoords(l: Location | Geopoint): LngLat | undefined {
    if (l instanceof Location) {
      return l.point?.coords;
    } else {
      return l.coords;
    }
  }

  const handleClick = debounce((e) => {
    let event = e as CustomEvent<MapMouseEvent>;
    const rawCoords = event.detail.lngLat;
    const coords = [rawCoords.lng, rawCoords.lat] as LngLat;
    onMapClick(coords);
  }, debounceDelay);

  export { className as class };
</script>

<div class={className} {id}>
  <MapLibre
    bounds={findBoundingBox(coords)}
    class="aspect-auto h-full w-full"
    standardControls
    style={mapTheme}
    on:click={handleClick}
  >
    {#each locations as location}
      <MapMarker
        {location}
        {draggable}
        {disabled}
        {debounceDelay}
        onClick={onMarkerClick}
        onDrag={onMarkerDrag}
      />
    {/each}
    <slot />
  </MapLibre>
</div>
