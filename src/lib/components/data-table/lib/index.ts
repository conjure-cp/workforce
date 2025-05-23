import ColumnHideSelector from "./column-hide-selector.svelte";
import TableHeader from "./table-header.svelte";

/**
 * Displays a capacity range (e.g. (2, 5, "shifts") -> "2 - 5 shifts").
 * TODO: We should probably move this to the utils folder.
 */
export function mkCapacity(min?: number, max?: number, title?: string) {
  if (min) {
    if (max) {
      return `${min} - ${max} ${title}`;
    }
    return `${min}+ ${title}`;
  }

  if (max && max !== Infinity) {
    return `${max} ${title}`;
  }

  return "No Limit";
}

export { ColumnHideSelector, TableHeader };
