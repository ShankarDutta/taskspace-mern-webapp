import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { StrictMode } from "react";
import Provider from "./components/Providers/Provider";
import "./index.css";
import Router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
);
