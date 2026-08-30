import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../Providers/ThemeProvider";
import { Button } from "../ui/button";

const ThemeToggleButton = ({ className }) => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(`flex cursor-pointer items-center`, className)}>
      <SunIcon
        size={20}
        className="-rotate-90 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
      />

      <MoonIcon
        size={20}
        className="absolute -rotate-90 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
      />
    </Button>
  );
};

export default ThemeToggleButton;
