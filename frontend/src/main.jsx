import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import { StrictMode } from "react";
import "./index.css";
import Router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
);
