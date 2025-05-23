<!--
Edit form for Location objects, with an interactive map and basic typeahead search.
The search uses OSM nominatim for geocoding. See $lib/model/geocoding for more details.
-->
<script lang="ts">
  import { Label } from "$lib/components/ui/label";
  import { Map, MapMarker } from "$lib/components/map";
  import { Search } from "$lib/components/search";
  import { Location } from "$lib/model";
  import { Geopoint } from "$lib/model/geocoding";
  import { getAddressCompletions } from "$lib/model/geocoding/osm";
  import { without } from "$lib/utils";

  export let item: Location;
  export let locations: Location[];

  let address: string = item.address;

  // Location updates reactively when the marker is dragged, but we need to manually update the address field
  function onDrag(item: Geopoint) {
    console.log(item);
    address = item.address.format();
  }
</script>

<div class="flex w-full flex-col gap-1.5">
  <Label class="font-semibold" for="address">Address</Label>
  <Search
    value={address}
    getSuggestions={getAddressCompletions}
    onSubmit={(s) =>
      Geopoint.search(s).then((p) => {
        if (item instanceof Location && p) {
          item.point = p[0];
        }
      })}
  />
</div>
<div class="flex w-full flex-col gap-1.5">
  <Label class="font-semibold" for="point">Location</Label>
  <Map locations={without(locations, item)} disabled id="point" class="h-[250px]">
    <MapMarker bind:location={item} draggable {onDrag} />
  </Map>
  {#if !item.point}
    <p>Click on the map to select a location</p>
  {/if}
</div>
