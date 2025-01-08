import React from "react";
import { useNavigate } from "react-router-dom";

// Day Six - React Fragments, Styling in react, React Router Basics
/* 
concepts
Key Concepts in React Router
Routes
Define paths that map to components. Each route renders a specific component when the path matches the browser URL.

Links
Use Link or NavLink to navigate between routes without reloading the page.

Router Components

BrowserRouter: Used for web apps with clean URLs (most common).
HashRouter: Uses # in the URL (e.g., example.com/#/home).
MemoryRouter: Useful for testing or non-browser environments.
Switch/Routes
Routes (formerly Switch in older versions) ensures only one route is matched and rendered.

Navigate
Programmatic navigation between routes.

<code> import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


*/
const PlaceHolderPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Hello, Here!</h1>
        <p>This is documentation for day six of learning react.</p>
        <p>Today i learned various things. Check the list 👇 for details</p>
        <ul className="mt-4">
          <li>
            I learned how to route components, it was really difficult yesterday
            because i was very very hungry😂
          </li>
        </ul>
        <button
          onClick={handleGoBack}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 text-sm"
        >
          Go back
        </button>
      </div>
    </>
  );
};

export default PlaceHolderPage;
