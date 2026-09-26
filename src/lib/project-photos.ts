// Real project photos: drop a file named after the project's slug into src/assets/real/
// (e.g. src/assets/real/tef-simulator.jpg) and it appears on the site. No photo → the layout stays text-only.
const files = import.meta.glob<string>("/src/assets/real/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });

export const projectPhoto = (slug: string): string | null => {
  const match = Object.entries(files).find(([file]) => file.split("/").pop()?.replace(/\.\w+$/, "") === slug);
  return match ? match[1] : null;
};
