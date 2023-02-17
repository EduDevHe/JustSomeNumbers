import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./styles/reset.css";
import "./styles/variables.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
