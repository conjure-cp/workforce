<!--
Edit form for the basic fields of a `Display` object.
Used inside edit dialogs for `Person`, `Location`, etc.
See also: $lib/ui/Display.
-->
<script lang="ts">
  import { type Display } from "$lib/ui";
  import { ImagePicker } from "$lib/components/image-picker";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";

  export let item: Display;
  let className = "";

  export { className as class };
</script>

<div class="flex w-full flex-row items-center justify-between gap-8 {className}">
  <ImagePicker bind:item size="xl" />
  <div class="flex h-full w-full flex-col gap-2">
    <div class="flex w-full flex-col gap-1.5">
      <Label class="font-semibold" for="name">Name</Label>
      <Input bind:value={item.name} id="name" placeholder="Name" type="text" />
    </div>
  </div>
</div>
<div class="flex w-full flex-col gap-1.5">
  <Label class="font-semibold" for="description">Description</Label>
  <Textarea
    bind:value={item.description}
    id="description"
    placeholder="Enter an optional description"
  />
</div>
