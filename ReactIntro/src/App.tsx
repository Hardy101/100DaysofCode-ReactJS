import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/dayElevenErrorBoundaries";
import BuggyComponent from "./components/BuggyComponent";
import Modal from "./components/modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <FormWithValidation /> */}
      {/* // <Router>
    //   <Routes>
    //     <Route path="/" element={<ConditionalRendering />} />
    //     <Route path="/PlaceHolder" element={<PlaceHolderPage />} />
    //   </Routes>
    // </Router> */}
      {/* <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      ; */}
      <div>
        <h1>React Portals Example</h1>
        <button onClick={() => setShowModal(true)}>Open Modal</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <h2 className="mt-2">Modal Content</h2>
            <p>This modal is rendered using a React Portal.</p>
          </Modal>
        )}
      </div>
    </>
  );
}

export default App;
