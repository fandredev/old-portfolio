import React from "react";
import ReactDOM from "react-dom";
import DarkModeProvider from "./contexts/DarkModeContext";
import LandingProvider from "./contexts/LandingContext";
import "./globals/Reset.scss";
import App from "./pages/Landing";

import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <LandingProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </LandingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
