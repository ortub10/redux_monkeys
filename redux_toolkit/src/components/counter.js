import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { add1, resetCounter } from "../features/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counrter = useSelector((myStore) => myStore.counterSlice.counter);
  return (
    <div className="container">
      <h2>Counter: {counrter}</h2>
      <button onClick={() => dispatch(add1())}>Add 1</button>
      <button onClick={() => dispatch(resetCounter())}>Reset</button>
    </div>
  );
}

export default Counter;
