import React from "react";

import Header from "./components/Header.js";
import Tabs from "./components/Tabs";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Tabs />
    </main>
  );
}
