import { Toaster } from "react-hot-toast";
import { useTheme } from "./ThemeProvider";

const ToastProvider = () => {
  const { theme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 5000,
        removeDelay: 1000,
        style: {
          background: isDark ? "#18181b" : "#ffffff",
          color: isDark ? "#fafafa" : "#09090b",
          border: `1px solid ${isDark ? "#3f3f46" : "#e4e4e7"}`,
        },

        success: {
          iconTheme: {
            primary: "#22c55e",
            secondary: "#fff",
          },
        },

        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#fff",
          },
        },
      }}
    />
  );
};

export default ToastProvider;
