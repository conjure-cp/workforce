<!--
Basic header for the columns - just formats the date
-->
<script lang="ts">
  import { getLocalTimeZone, type CalendarDate } from "@internationalized/date";

  export let day: CalendarDate;
  export let options: Intl.DateTimeFormatOptions = {};
  export let locale: string | string[] = Array.from(navigator.languages) || "en";
  export let tzid: string = getLocalTimeZone() || "UTC";
  export let style = "";
  let className = "";

  $: formatter = new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", ...options });
  $: formatted = formatter.format(day.toDate(tzid));

  export { className as class };
</script>

<div class="text-center {className}" {style}>
  <slot {formatted}>
    {formatted}
  </slot>
</div>
