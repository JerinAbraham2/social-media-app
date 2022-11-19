import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { MantineProvider } from "@mantine/core";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="app">
        <Header />
        {/* App Body */}
        <div className="app__body">
          <Sidebar />
          <Feed />
          {/* Widgets */}
        </div>
      </div>
    </MantineProvider>
  );
}

export default App;
