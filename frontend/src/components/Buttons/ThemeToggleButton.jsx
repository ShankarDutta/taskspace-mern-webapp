import { cn } from "@/lib/utils";
import { MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "../Providers/ThemeProvider";

const ThemeToggleButton = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(`flex cursor-pointer items-center`, className)}>
      <SunIcon
        size={20}
        className="-rotate-90 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
      />

      <MoonStarIcon
        size={20}
        className="absolute -rotate-90 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
      />
    </button>
  );
};

export default ThemeToggleButton;
