import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./Components/Header/Nav";
import Home from "./Components/Body/Home";
function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  );
}

export default App;
