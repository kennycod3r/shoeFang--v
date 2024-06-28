import React from "react";
import { createRoot } from "react-dom/client";
import RouterProviderComponent from "./routes/RouterProviderComponent";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouterProviderComponent />
  </React.StrictMode>
);
