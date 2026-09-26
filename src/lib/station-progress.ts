import { useSyncExternalStore } from "react";
import { stations } from "@/data/profile";

// One source of truth for "where is the reader on the line", shared by the rail (desktop),
// the progress bar and the header's Now/Next readout (phones), so the navigation can never disagree.

// A section "arrives" when its top edge crosses this fraction of the viewport height.
const ARRIVAL_LINE = 0.45;

let progress = 0;
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const getProgress = () => progress;

export const setProgress = (next: number) => {
  if (next === progress) return;
  progress = next;
  listeners.forEach((listener) => listener());
};

/** Runs `onChange` whenever progress moves (every scroll frame). For direct DOM writes, not React state. */
export const onProgress = subscribe;

/**
 * Where the reader is along the line, as a float from 0 (first station) to stations.length - 1 (last).
 * Stations are evenly spaced like a transit map, so the value interpolates between the two sections the
 * reader is between rather than tracking raw scroll distance.
 */
export const measureProgress = () => {
  const anchor = window.innerHeight * ARRIVAL_LINE;
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  if (atBottom) return stations.length - 1;

  const tops = stations.map((s) => document.getElementById(s.section)?.getBoundingClientRect().top ?? Infinity);
  let value = 0;
  tops.forEach((top, i) => {
    if (top > anchor) return;
    const next = tops[i + 1];
    value = next === undefined || next === Infinity ? i : i + Math.min((anchor - top) / (next - top), 1);
  });
  return value;
};

/** Index of the last station the reader has reached. Re-renders only when that index changes. */
export const useReachedStation = () =>
  useSyncExternalStore(subscribe, () => Math.floor(progress + 0.001));
