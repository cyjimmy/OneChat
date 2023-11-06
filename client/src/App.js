import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Chat from "./Components/Chat";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
