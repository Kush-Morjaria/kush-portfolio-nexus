import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// tailwind-merge treats any unknown `text-*` / `border-*` as a colour, so it would drop the design system's
// custom sizes and widths (e.g. keep `text-ink` and throw away `text-title`). Register them by name.
// Keep in step with fontSize and borderWidth in tailwind.config.ts.
const fontSizes = ["display-xl", "display-lg", "display-md", "title", "lead", "body", "small", "label"]
const borderWidths = ["hair", "heavy"]

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: fontSizes }],
      "border-w": [{ border: borderWidths }],
      "border-w-x": [{ "border-x": borderWidths }],
      "border-w-y": [{ "border-y": borderWidths }],
      "border-w-t": [{ "border-t": borderWidths }],
      "border-w-r": [{ "border-r": borderWidths }],
      "border-w-b": [{ "border-b": borderWidths }],
      "border-w-l": [{ "border-l": borderWidths }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
