import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import FormValidate from "./components/dayNine-FormValidate";

function App() {
  return (
    <FormValidate />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<ConditionalRendering />} />
    //     <Route path="/PlaceHolder" element={<PlaceHolderPage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
