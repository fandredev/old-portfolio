import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/Landing";
import LandingProvider from "./contexts/LandingContext";
import DarkModeProvider from "./contexts/DarkModeContext";
import "./globals/Reset.scss";

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
