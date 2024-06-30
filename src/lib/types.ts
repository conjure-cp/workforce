import type { IconifyIcon } from "@iconify/svelte";

export interface Link {
  href: string;
  text: string;
  icon?: string | IconifyIcon;
}

export type TailwindFontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";
