"use client";

import type { Theme } from "@/lib/types";
import React, { MouseEvent, useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const storedTheme = window.localStorage.getItem("theme");
  const [theme, setTheme] = useState<Theme>("light");

  const switchTheme = (e: MouseEvent<HTMLButtonElement>) => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme)  {
      setTheme(localTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="bg-opacity/80 fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      onClick={switchTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
