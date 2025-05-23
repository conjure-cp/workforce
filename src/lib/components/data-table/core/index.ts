import type { DataColumnInitBase, DataColumnInitFnAndId } from "svelte-headless-table";
import DataTableCore from "./data-table.svelte";

/* eslint-disable  @typescript-eslint/no-explicit-any */

/** Map of human-readable action names to their implementations (functions that take the row item and do something with it) */
export type RowActions<T> = Map<string, (item: T) => void>;

/**
 * Some boilerplate for column initializers to allow some basic type inference
 * - `T` is the row type
 * - `V` is the cell value type (returned by the cell's accessor function)
 * - Middle value is the plugin config but defining it properly is complicated and probably not worth it
 */
export type ColumnInitializer<T, V = any> = DataColumnInitBase<T, any, V> &
  DataColumnInitFnAndId<T, string, V>;

export { DataTableCore };
