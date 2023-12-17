import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'
import './ses/lockdown.umd.js';

lockdown({
    errorTaming: "unsafe",
    overrideTaming: "severe",
    consoleTaming: "unsafe",
  });
  
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
