import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/dayElevenErrorBoundaries";
import BuggyComponent from "./components/BuggyComponent";

function App() {
  return (
    <>
      {/* <FormWithValidation /> */}
      {/* // <Router>
    //   <Routes>
    //     <Route path="/" element={<ConditionalRendering />} />
    //     <Route path="/PlaceHolder" element={<PlaceHolderPage />} />
    //   </Routes>
    // </Router> */}
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      ;
    </>
  );
}

export default App;
