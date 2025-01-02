import React, { useState } from "react";

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
          This number increases <span className="font-bold px-2 py-1 bg-[#f5f5f5]">{count}</span>
        </p>
        <button onClick={increment} className="text-sm px-3 py-2 bg-[#f5f5f5] mx-2 font-bold mt-5">Increase</button>
        <button onClick={decrement} className="text-sm px-3 py-2 bg-[#f5f5f5] mx-2 font-bold">Decrease</button>
      </main>
    </>
  );
};
export default HelloWorld;
