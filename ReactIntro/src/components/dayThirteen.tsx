// Optimization - React.memo

import React, { useState } from "react";

const MemoizedChild = React.memo(() => {
  console.log("Child re-rendered!");
  return (
    <>
      <h1 className="p-16 text-2xl">Hello Fella</h1>
    </>
  );
});

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemoizedChild />
    </div>
  );
};

export default Parent;
