import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
}

export default App;
