<!--
Entry point for edit dialogs.

- Content is defined in the `EditForm` component.
- Default slot is the trigger button.
- Named slots `options` and `actions` can be used to add extra options to the dialog.

Props:
- `selected`: The item being edited. For convenience, the component accepts `undefined` as well and displays an empty state.
- `title`: The title of the dialog.
- `open`: If true, the dialog is open. Bindable.
- `state`: The global state containing the objects.
- `onSubmit`: A callback that fires when the user submits the form. Takes the item as an argument.
- `onOpenChange`: A callback that fires when the dialog is opened or closed. Argument is the new value of `open`.
-->

<script lang="ts" generics="T">
  import { Button } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog";
  import { state as GLOBAL_STATE } from "$lib/model";
  import { Base } from "$lib/model/core";
  import EditForm from "./edit-form.svelte";

  export let selected: T | undefined;
  export let title = "Edit";
  export let open = false;
  export let state = GLOBAL_STATE;
  export let onSubmit: (item: T) => void = () => {};
  export let onOpenChange: (open: boolean) => void = () => {};

  function handleSubmit() {
    if (selected) {
      if (selected instanceof Base) selected.push();
      onSubmit(selected);
    }
    open = false;
  }
</script>

<Dialog.Root bind:open {onOpenChange}>
  <Dialog.Trigger>
    <slot />
  </Dialog.Trigger>
  <Dialog.Content class="max-w-2xl p-4">
    <Dialog.Header>
      <Dialog.Title class="text-xl font-semibold">{title}</Dialog.Title>
      <Dialog.Description>
        Click save to apply changes. Press ESC or close the dialog to cancel.
      </Dialog.Description>
    </Dialog.Header>
    {#if selected}
      <EditForm bind:item={selected} {state}>
        <slot name="options" />
      </EditForm>
      <Dialog.Footer class="mt-4">
        <slot name="actions" />
        <Button on:click={handleSubmit} type="submit">Save changes</Button>
      </Dialog.Footer>
    {:else}
      <div class="flex h-40 w-full items-center justify-center bg-muted">
        <p class="text-lg font-semibold text-muted-foreground">No item selected</p>
      </div>
    {/if}
  </Dialog.Content>
</Dialog.Root>
