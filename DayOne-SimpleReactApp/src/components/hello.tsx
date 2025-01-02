import React from "react";

interface GreetingProps {
  name: String;
  age: number;
}

const HelloWorld: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <>
      <h1 className="font-bold text-3xl">
        Hello, {name}!, you have been alive for {age} years!
      </h1>
    </>
  );
};
export default HelloWorld;
