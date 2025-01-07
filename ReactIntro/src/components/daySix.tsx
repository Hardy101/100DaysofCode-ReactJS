import React from "react";

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
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Hello, Tailwind!</h1>
        <p className="text-lg text-gray-700">
          This is a simple React page with Tailwind CSS styling.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Click Me
        </button>
      </div>
    </>
  );
};

export default PlaceHolderPage;
