import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// My utils

export const months = Array.from({ length: 12 }, (item, i) => {
  return new Date(0, i).toLocaleString("en-US", { month: "long" });
});

export const years = Array.from({ length: 201 }, (item, i) => {
  return new Date(new Date().getFullYear() - 25 + i, 0).toLocaleString(
    "en-US",
    {
      year: "numeric",
    }
  );
});
