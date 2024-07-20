import type { IconifyIcon } from "@iconify/svelte";
import type Color from "color";

export interface IconType {
  icon: string | IconifyIcon;
  color?: Color;
}

export interface Link {
  href: string;
  text: string;
  icon?: IconType;
}
