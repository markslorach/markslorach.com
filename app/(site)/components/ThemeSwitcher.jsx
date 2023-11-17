"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Button } from "@nextui-org/button";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const switchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button isIconOnly size="sm" variant="flat" aria-label="Light Dark Mode" onClick={switchTheme}>
      {theme === "dark" ? <LightModeIcon fontSize="small" /> : <ModeNightIcon fontSize="small" />}
    </Button>
  );
}
