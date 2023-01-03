import React, { useContext, useRef } from "react";
import { AppContext } from "../context/context";

function FruitInput(props) {
  const { addNewFruit } = useContext(AppContext);

  const inputRef = useRef();
  return (
    <div className="my-3 d-flex">
      <input
        ref={inputRef}
        placeholder="add new fruit..."
        type="text"
        className="form-control"
      />
      <button
        onClick={() => addNewFruit(inputRef.current.value)}
        className="btn btn-info"
      >
        Add
      </button>
    </div>
  );
}

export default FruitInput;
