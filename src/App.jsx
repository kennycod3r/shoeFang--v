import React from "react";
import "./App.css";
import ShoeFangTwo from "./pages/ShoeFangTwo";
import { BagProvider } from "./context/BagContext";

function App() {
  return (
    <BagProvider>
      <ShoeFangTwo />
    </BagProvider>
  );
}

export default App;
