"use client";

import { useTheme } from "../context/ThemeContext";


export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="rounded-lg bg-stone-600 text-2xl p-4 text-center hover:bg-stone-700">
      Current theme: {theme}
    </button>
  );
}
