import React, { useState } from "react";

const BuggyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  if (count > 3) {
    throw new Error("Count exceeded limit!");
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default BuggyComponent;
