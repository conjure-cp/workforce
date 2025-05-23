import Color from "color";
import type { JsonObject } from "type-fest";

export interface HasUUID {
  uuid: string;
}

export function hasUUID(obj: unknown): obj is HasUUID {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "uuid" in obj &&
    typeof (obj as HasUUID).uuid === "string"
  );
}

export function getInitials(name: string): string {
  if (name.length === 0) return "N/A";

  if (name.length <= 3) return name.toUpperCase();

  return name
    .split(" ")
    .filter((s) => s.length > 0)
    .map((n) => n[0].toUpperCase())
    .join("");
}

export function lstrip(s: string, substr: string): string {
  if (substr.length === 0 || s.length === 0) return s;
  while (s.startsWith(substr)) {
    s = s.slice(substr.length);
  }
  return s;
}

/**
 * Convert the first letter of a string to uppercase
 * @param s the string to capitalize
 */
export function capitalize(s: string) {
  if (s.length === 0) return s;
  if (s.length === 1) return s.toUpperCase();
  return s[0].toUpperCase() + s.slice(1);
}

export function debounce<T extends (...args: unknown[]) => void>(callback: T, wait = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
}

export function noUndefined<T extends object>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined)) as T;
}

export function randomColor(): Color {
  return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}

export function varyColor(
  col: Color,
  delta?: { hue?: number; saturation?: number; lightness?: number },
) {
  const { hue = 0, saturation = 0, lightness = 0 } = delta ?? {};
  const { h, s, l } = col.hsl().object();

  const newH = (h + hue + 360) % 360;
  const newS = Math.min(100, Math.max(0, s + saturation));
  const newL = Math.min(100, Math.max(0, l + lightness));

  return Color.hsl(newH, newS, newL);
}

export function randVaryColor(
  col: Color,
  options: { lightnessSpread?: number; saturationSpread?: number; hueSpread?: number },
): Color {
  const { lightnessSpread = 0, saturationSpread = 0, hueSpread = 0 } = options;
  const { h, s, l } = col.hsl().object();

  const newH = (h + (Math.random() - 0.5) * hueSpread + 360) % 360;
  const newS = Math.min(100, Math.max(0, s + (Math.random() - 0.5) * saturationSpread));
  const newL = Math.min(100, Math.max(0, l + (Math.random() - 0.5) * lightnessSpread));

  return Color.hsl(newH, newS, newL);
}

export function range(end: number, start = 0, step = 1): number[] {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

export function downloadJSON(json: JsonObject, fileName?: string) {
  // 1. Convert the data to a Blob with the JSON pretty-printed string
  const jsonString = JSON.stringify(json, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });

  // 2. Create a dummy link element to "download" the blob
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = fileName || "data.json";

  // 3. Append to the document, click, and remove
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);

  // 4. Revoke the object URL to free up resources
  URL.revokeObjectURL(url);

  console.log(`${fileName || "data.json"} downloaded.`);
}
