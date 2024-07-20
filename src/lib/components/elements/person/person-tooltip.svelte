<script lang="ts">
  import type { Person } from "$lib/types/core.ts";
  import { CakeIcon } from "lucide-svelte";

  let person: Person;

  export { person };
</script>

<div class="flex flex-row justify-between items-center">
  <h3 class="font-semibold">{person.name}</h3>
  <div class="flex flex-row ml-2 gap-1 items-center">
    <CakeIcon />
    {person.age}
  </div>
</div>
<div>
  {person.job_title}
</div>