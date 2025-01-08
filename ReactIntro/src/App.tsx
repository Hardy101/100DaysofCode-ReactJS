import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ConditionalRendering from "./components/hello";
import PlaceHolderPage from "./components/daySix";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConditionalRendering />} />
        <Route path="/PlaceHolder" element={<PlaceHolderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
