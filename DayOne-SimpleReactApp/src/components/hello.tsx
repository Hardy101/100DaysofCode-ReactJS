import React from "react";
interface GreetingProps {
  name: String;
  age: number;
}

// const HelloWorld: React.FC<GreetingProps> = (props) => {
const HelloWorld: React.FC<GreetingProps> = ({ name, age }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">
        Hello {name}!, You have being alive for {age} years!
      </h1>
    </>
  );
};

export default HelloWorld;
