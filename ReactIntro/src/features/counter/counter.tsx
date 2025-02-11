import React from "react";
import { RootState } from "../../app/store";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h2>Count: {count}</h2>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increase by 5
        </button>
      </div>
    </>
  );
};

export default Counter;
