// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";                       // Tailwind styles
import App from "./App.jsx";                // <— only ONE import for App
import AuthProvider from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
