import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider
      theme={{
        colors: {
          // Add your color
          deepBlue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
          // or replace default theme color
          blue: ["#E9EDFC", "#C1CCF6", "#99ABF0" /* ... */],
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="app">
        {/* Header */}
        <Header />
        {/* App Body */}
        {/* Side bar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
    </MantineProvider>
  );
}

export default App;
