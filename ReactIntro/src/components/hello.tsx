import React, { useState } from "react";

// Day one
/* 
// Properties (props)
interface GreetingProps {
  name: String;
  age: number;
}

const HelloWorld: React.FC<GreetingProps> = ({ name, age }) => {
  const [count, setCount] = useState(age);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <main className="p-16">
        <h1 className="font-bold text-3xl">
          Hello, {name}!, you have been alive for {age} years!
        </h1>
        <p className="mt-4 text-2xl">
          This number increases{" "}
          <span className="font-bold px-2 py-1 bg-[#f5f5f5]">{count}</span>
        </p>
        <button
          onClick={increment}
          className="text-sm px-3 py-2 bg-[#f5f5f5] mx-2 font-bold mt-5"
        >
          Increase
        </button>
        <button
          onClick={decrement}
          className="text-sm px-3 py-2 bg-[#f5f5f5] mx-2 font-bold"
        >
          Decrease
        </button>
      </main>
    </>
  );
};
export default HelloWorld;


// Day 3 - Conditional Rendering, Lists and keys
const ConditionalRendering = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const toggleLoggedIn = () => {
    setisLoggedIn(!isLoggedIn);
  };

  const navLinks = [
    { id: 0, title: "Home" },
    { id: 1, title: "About" },
    { id: 2, title: "Services" },
    { id: 3, title: "Contact" },
  ];

  return (
    <main className="p-4">
      <h1 className="font-bold text-3xl">Day #3 conditional rendering</h1>
      <p className="mt-4">
        <button
          onClick={toggleLoggedIn}
          className="text-xs bg-[#f5f5f5] px-4 py-2 font-bold"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </p>
      <p className="mt-4">
        {isLoggedIn && (
          <ul className="flex gap-4 text-xs font-bold">
            {navLinks.map((link) => (
              <li key={link.id}> {link.title} </li>
            ))}
          </ul>
        )}
      </p>
    </main>
  );
};

export default ConditionalRendering;
*/

const BasicForm = () => {
  return (
    <>
      <h1>Form</h1>
    </>
  );
};


export default BasicForm