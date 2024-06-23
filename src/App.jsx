import React from "react";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import ShoeFangTwo from "./pages/ShoeFangTwo";
import { BagProvider } from "./context/BagContext";
// import useLenis from "./components/hooks/UseLennis";
import Loading from "./utility/Loader/Loading";

function App() {
  // useLenis();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  

  return (
    <BagProvider>
      <ShoeFangTwo/>
    </BagProvider>
  );
}

export default App;
