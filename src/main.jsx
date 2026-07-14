/**
 * What: application entry point — mounts the React tree into #root.
 * Data from: n/a.
 * Used by: index.html, which loads this file as the module script.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
