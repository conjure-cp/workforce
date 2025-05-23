This directory contains a wrapper over the `shadcn-svelte` [Data Table](https://www.shadcn-svelte.com/docs/components/data-table) component,
which, in turn, wraps [Svelte Headless Table](https://svelte-headless-table.bryanmylee.com/).

The underlying component is "headless" (i.e. provides the underlying logic without display), and we define the styling here.
We also set up the "plugins" (e.g. search, sorting, pagination) and define columns for data types used in this project.

The base logic is in `core`, utilities are in `lib` and concrete implementations are here (e.g. `person-data-table.svelte`).

Thanks to the headless component, we can easily define columns in a JSON format:

```typescript
let columnInitializers: ColumnInitializer<Shift>[] = [
  {
    accessor: (row) => row as Display,
    cell: (cell) => createRender(ProfilePicture, { item: cell.value }),
    header: "Icon",
    id: "icon",
    plugins: {
      sort: {
        disable: true,
      },
    },
  },
  {
    accessor: (row: Person) => dobFormatter.format(row.dob),
    header: "Date of Birth",
    id: "dob",
  },
  ...
]
```

And provide a dropdown of actions for each row (e.g. editing or deleting the underlying entry):

```typescript
let actions = new Map([
  ["Edit", rowClick],
  ["Delete", rowDelete],
]);
function rowDelete(item: Person) {
  // do something on click!
}
```

And everything else is handled for us by the library and the `core` implementation!

This reduces the complexity and boilerplate required to write proper data tables.
Data tables are used widely in the project. If you are looking to build a new one, I would suggest copying one of the existing implementations and editing the columns / row actions.
