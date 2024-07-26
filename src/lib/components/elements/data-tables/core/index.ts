// We need to allow explicit any here because of the way the svelte-headless-table library is written
/* eslint-disable  @typescript-eslint/no-explicit-any */

import type { DataColumnInitBase, DataColumnInitKey } from "svelte-headless-table";

export type ColumnInitializer = DataColumnInitBase<any> & DataColumnInitKey<any, any>;
