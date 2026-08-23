import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./ThemeProvider";
import ToastProvider from "./ToastProvider";

const Provider = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeProvider
        defaultTheme="dark"
        storageKey="vite-ui-theme">
        {children}

        <ToastProvider />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default Provider;
