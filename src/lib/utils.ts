import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";
import Color from "color";
import { faker } from "@faker-js/faker";
import type { LngLat } from "$lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
  y?: number;
  x?: number;
  start?: number;
  duration?: number;
};

export const flyAndScale = (
  node: Element,
  params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;

  const scaleConversion = (valueA: number, scaleA: [number, number], scaleB: [number, number]) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;

    const percentage = (valueA - minA) / (maxA - minA);
    return percentage * (maxB - minB) + minB;
  };

  const styleToString = (style: Record<string, number | string | undefined>): string => {
    return Object.keys(style).reduce((str, key) => {
      if (style[key] === undefined) return str;
      return str + `${key}:${style[key]};`;
    }, "");
  };

  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

      return styleToString({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};

/**
 * Convert the first letter of a string to uppercase
 * @param s the string to capitalize
 */
export function capitalize(s: string) {
  if (s.length === 0) return s;
  if (s.length === 1) return s.toUpperCase();
  return s[0].toUpperCase() + s.slice(1);
}

/**
 * Pads an array to a certain length with a value
 * @param array The array to pad
 * @param toLength The length to pad the array to
 * @param value The value to pad the array with
 */
export function pad<T>(array: T[], toLength: number, value: T): T[] {
  if (array.length > toLength) return array.slice(0, toLength);
  else if (array.length < toLength) return array.concat(Array(toLength - array.length).fill(value));
  return array;
}

export function getTextColour(bg_colour: Color): Color {
  return bg_colour.isLight() ? Color.rgb(0, 0, 0) : Color.rgb(255, 255, 255);
}

export function sampleOne<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[faker.number.int({ min: 0, max: arr.length - 1 })];
}

export function sample<T>(arr: T[], n: number, unique: boolean = true): T[] {
  const ans: T[] = [];

  if (n >= arr.length) return arr;

  for (let i = 0; i < n; i++) {
    if (unique) {
      const remaining: T[] = arr.filter((e) => !ans.includes(e));
      const next = sampleOne(remaining);
      if (next !== undefined) ans.push(next);
    } else {
      const next = sampleOne(arr);
      if (next !== undefined) ans.push(next);
    }
  }

  return ans;
}

export function findBoundingBox(
  coords: LngLat[],
  padding: number = 0.01
): [LngLat, LngLat] | undefined {
  if (coords.length === 0) return undefined;

  let minLng = coords[0][0];
  let maxLng = coords[0][0];
  let minLat = coords[0][1];
  let maxLat = coords[0][1];

  for (const [lng, lat] of coords) {
    if (lng < minLng) minLng = lng;
    if (lng > maxLng) maxLng = lng;
    if (lat < minLat) minLat = lat;
    if (lat > maxLat) maxLat = lat;
  }

  const topLeft: LngLat = [minLng - padding, maxLat + padding];
  const bottomRight: LngLat = [maxLng + padding, minLat - padding];

  return [topLeft, bottomRight];
}

export function stripPrefix(s: string, prefix: string): string {
  if (prefix === "") return s;
  while (s.startsWith(prefix)) s = s.slice(prefix.length);
  return s;
}

export function getInitials(name: string): string {
  if (name.length === 0) return "N/A";

  if (name.length <= 3) return name.toUpperCase();

  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");
}
