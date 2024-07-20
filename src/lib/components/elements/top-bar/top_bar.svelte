<script lang="ts">
  let sticky: boolean = true;
  export { sticky };
</script>

<div
  class="w-full h-fit px-4 py-3 flex flex-row items-center justify-between bg-gray-200 z-10 {sticky ? 'sticky top-0' : ''}">
  <menu class="w-auto h-fit flex flex-row gap-3 items-center justify-start list-none">
    <slot name="start" />
  </menu>
  <menu class="w-auto h-fit flex flex-row gap-3 items-center justify-center list-none">
    <slot name="middle" />
  </menu>
  <menu class="w-auto h-fit flex flex-row gap-3 items-center justify-end list-none">
    <slot name="end" />
  </menu>
</div>