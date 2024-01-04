import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme appearance="light" accentColor="iris" grayColor="gray" radius="full">
      <Header />
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </React.StrictMode>
);
