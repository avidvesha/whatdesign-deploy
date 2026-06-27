import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore: CSS imports require type declarations in this setup
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

