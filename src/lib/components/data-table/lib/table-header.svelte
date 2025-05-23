<!--
Helper component containing controls, displayed above a table.
-->

<script lang="ts">
  let sticky = true;
  export { sticky };
</script>

<div
  class="z-10 flex h-fit w-full flex-row items-center justify-between bg-secondary px-4 py-3 {sticky
    ? 'sticky top-0'
    : ''}"
>
  <menu class="flex h-fit w-auto list-none flex-row items-center justify-start gap-3">
    <slot name="start" />
  </menu>
  <menu class="flex h-fit w-auto list-none flex-row items-center justify-center gap-3">
    <slot name="middle" />
  </menu>
  <menu class="flex h-fit w-auto list-none flex-row items-center justify-end gap-3">
    <slot name="end" />
  </menu>
</div>
