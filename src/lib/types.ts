import type { IconifyIcon } from "@iconify/svelte";

export interface Link {
  href: string;
  text: string;
  icon?: string | IconifyIcon;
}
