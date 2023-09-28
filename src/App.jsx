import React from "react";
import ChatBot from "./components/ChatBot";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-black overflow-hidden ">
      <Hero />
      <ChatBot />
    </div>
  );
}

export default App;
