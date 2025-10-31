"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-4 right-4 sm:top-6 sm:right-6 z-50",
        "p-2.5 sm:p-3 rounded-full",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-300 dark:border-zinc-700",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-200",
        "hover:scale-110 active:scale-95"
      )}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 sm:w-5 sm:h-5 text-zinc-700" />
      ) : (
        <Sun className="w-5 h-5 sm:w-5 sm:h-5 text-yellow-400" />
      )}
    </button>
  );
}
