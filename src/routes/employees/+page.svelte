<script lang="ts">
  import EmployeesDataView from "$lib/components/elements/data-views/employees-data-view.svelte";
  import { SidebarPosition } from "$lib/components/ui/sidebar";
  import Sidebar from "$lib/components/ui/sidebar/sidebar.svelte";
</script>

<div class="bg-gray-50 w-full">
  <main class="w-full h-dvh p-4">
    <EmployeesDataView />
  </main>
</div>

<Sidebar position={SidebarPosition.right}>
</Sidebar>