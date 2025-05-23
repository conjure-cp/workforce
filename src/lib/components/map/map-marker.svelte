<!--
Marker component for displaying a Location or coordinates on the map.
If draggable, the value can be changed by dragging the marker.

TODO: better docs
-->

<script lang="ts">
  import { Location } from "$lib/model/core";
  import { Icon } from "$lib/ui";
  import { Geopoint, type LngLat } from "$lib/model/geocoding";
  import { debounce } from "$lib/utils/misc";
  import { Marker, type MarkerClickInfo, Popup } from "svelte-maplibre";
  import { ProfilePicture } from "$lib/components/profile";

  export let location: Location | Geopoint;
  export let draggable = false;
  export let disabled = false;
  export let debounceDelay = 300;
  export let onDrag: (point: Geopoint) => void = () => {};
  export let onClick: (location: Location | Geopoint) => void = () => {};
  let className = "";

  const defaultIcon = Icon.fromString("lucide:map-pin");
  $: coordinates = location instanceof Location ? location.point?.coords : location.coords;
  $: display =
    location instanceof Geopoint
      ? {
          name: `Point: (${formatCoords(location.coords)})`,
          icon: defaultIcon,
          description: location.address?.format(),
        }
      : location;

  function formatCoords(coords: LngLat): string {
    return `${coords[0].toFixed(4)}, ${coords[1].toFixed(4)}`;
  }

  const handleDrag = debounce((e) => {
    const event = e as CustomEvent<MarkerClickInfo>;
    const coords = event.detail.lngLat;
    if (location instanceof Location) {
      if (location.point) {
        location.point.updateCoords(coords).then(() => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          onDrag(location.point!);
        });
      } else {
        Geopoint.fromCoords(coords).then((point) => {
          location.point = point;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          onDrag(location.point!);
        });
      }
    } else if (location instanceof Geopoint) {
      location.updateCoords(coords).then(() => onDrag(location));
    }
  }, debounceDelay);

  export { className as class };
</script>

{#if coordinates}
  <Marker
    class={className}
    draggable={draggable && !disabled}
    lngLat={coordinates}
    on:drag={handleDrag}
    on:click={() => onClick(location)}
  >
    <div class="group relative h-8 w-8 {disabled && 'opacity-50'}">
      <ProfilePicture item={display} {defaultIcon} />
    </div>

    <Popup offset={[0, -25]} openOn="hover">
      <span class="text-md">{display.name}</span>
    </Popup>
  </Marker>
{/if}
