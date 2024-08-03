<!--suppress ES6UnusedImports -->
<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import { PipetteIcon } from "lucide-svelte";
  import { getTextColour } from "$lib/utils.ts";

  const DEFAULT_COLOURS: string[] = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#22c55e",
    "#14b8a6",
    "#3b82f6",
    "#8b5cf6",
    "#52525b"
  ];

  let options: string[] = DEFAULT_COLOURS;
  let color: string | undefined = undefined;
  let inputValue: string;
  let className: string = "";
  let onSelect: (c: string) => void = () => {
  };

  export { options, color, onSelect, className as class };
</script>

<div class="flex flex-row flex-wrap gap-2 {className}">
  {#each options as option}
    <Button
      class="w-6 h-6 p-0 rounded-full hover:drop-shadow-lg focus:drop-shadow-lg outline-offset-2 transition-all"
      style={`background-color: ${option}; color: ${option}; outline: 2px solid ${color === option ? option : "transparent"};`}
      on:click={() => {color = option; onSelect(color)}}
    />
  {/each}
  <Tooltip.Root>
    <Tooltip.Trigger>
      <div class="w-6 h-6 rounded-full relative bg-muted text-accent-foreground hover:drop-shadow-lg transition-all"
           style={(color && !options.includes(color)) ? `background-color: ${color}; outline: 2px solid ${color}; outline-offset: 2px` : ""}>
        <input class="absolute top-0 left-0 w-6 h-6 rounded-full z-10"
               type="color"
               style="opacity: 0.5%"
               bind:value={inputValue}
               on:input={() => {color = inputValue; onSelect(color)}} />
        <PipetteIcon
          class="absolute top-0 left-0 w-6 h-6 p-1 text-accent-foreground"
          style={(color && !options.includes(color)) ? `color: ${getTextColour(color)}` : ""}
        />
      </div>
    </Tooltip.Trigger>
    <Tooltip.Content>
      Custom colour
    </Tooltip.Content>
  </Tooltip.Root>

</div>