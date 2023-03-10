import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import { SocketProvider } from "./providers/Socket";
import Room from "./pages/Room";
const App = () => {
  return (
    <div>
      <SocketProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </SocketProvider>
    </div>
  );
};

export default App;
