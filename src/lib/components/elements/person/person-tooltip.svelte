<script lang="ts">
  import type { Person } from "$lib/types";
  import { CakeIcon } from "lucide-svelte";
  import { getAgeForPerson } from "$lib/types/person.ts";

  let person: Person;

  export { person };
</script>

<div class="flex flex-row justify-between items-center">
  <h3 class="font-semibold">{person.name}</h3>
  <div class="flex flex-row ml-2 gap-1 items-center">
    <CakeIcon />
    {getAgeForPerson(person)}
  </div>
</div>
<p class="text-muted-foreground">
  {person.job_title}
</p>