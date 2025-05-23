<!--
# Color Picker component

Provides input for the Color type.
The user can either choose from a pre-defined palette or use the system color picker.
The latter only works in browser that support the HTML5 color input type.

Props:
- `color` (required): The currently selected color. Can be used with `bind`.
- `options`: An array of [Color, string] pairs, where the string is a human-readable name for the color (e.g. "Cyan").
             This is the pre-defined palette. Defaults to a list of 8 colors based on Tailwind CSS defaults.
- `onSelect`: A callback function that is called when a color is selected.
- `class`: String of additional Tailwind CSS classes to add to the top-level div.

See also: 
- https://www.npmjs.com/package/color
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
-->
<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import Color from "color";
  import { PipetteIcon } from "lucide-svelte";

  const DEFAULT_COLOURS: [Color, string][] = [
    [new Color("#ef4444"), "Red"],
    [new Color("#f97316"), "Orange"],
    [new Color("#eab308"), "Yellow"],
    [new Color("#22c55e"), "Green"],
    [new Color("#14b8a6"), "Teal"],
    [new Color("#3b82f6"), "Blue"],
    [new Color("#8b5cf6"), "Indigo"],
    [new Color("#52525b"), "Gray"],
  ];

  let options: [Color, string][] = DEFAULT_COLOURS;
  let color: Color | undefined = undefined;
  let inputValue: string;
  let className = "";
  let onSelect: (c: Color) => void = () => {};

  let inputStyle: string;
  let pipetteColor: string;
  $: {
    if (color && !options.some(([col, _]) => col.hex() === color?.hex())) {
      inputStyle = `background-color: ${color}; outline: 2px solid ${color}; outline-offset: 2px`;
      pipetteColor = color.isDark() ? "white" : "black";
    } else {
      inputStyle = "";
      pipetteColor = "currentColor";
    }
  }

  export { options, color, onSelect, className as class };
</script>

<div class="flex flex-row flex-wrap gap-2 {className}">
  {#each options as [option, name]}
    <Tooltip.Root openDelay={50}>
      <Tooltip.Trigger asChild let:builder>
        <Button
          class="h-6 w-6 rounded-full p-0 outline-offset-2 transition-all hover:drop-shadow-lg focus:drop-shadow-lg"
          style={`background-color: ${option}; color: ${option}; outline: 2px solid ${color === option ? option : "transparent"};`}
          builders={[builder]}
          on:click={() => {
            color = option;
            onSelect(color);
          }}
        />
      </Tooltip.Trigger>
      <Tooltip.Content>{name}</Tooltip.Content>
    </Tooltip.Root>
  {/each}
  <Tooltip.Root>
    <Tooltip.Trigger>
      <div
        class="relative h-6 w-6 rounded-full bg-muted text-accent-foreground transition-all hover:drop-shadow-lg"
        style={inputStyle}
      >
        <input
          class="absolute left-0 top-0 z-10 h-8 w-8 rounded-full p-0"
          type="color"
          style="opacity: 0%"
          bind:value={inputValue}
          on:input={() => {
            color = new Color(inputValue);
            onSelect(color);
          }}
        />
        <PipetteIcon
          class="absolute left-0 top-0 h-6 w-6 p-1 text-accent-foreground"
          color={pipetteColor}
        />
      </div>
    </Tooltip.Trigger>
    <Tooltip.Content>Custom colour</Tooltip.Content>
  </Tooltip.Root>
</div>
