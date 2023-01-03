import React from "react";
import { useDispatch } from "react-redux";

import { changeFruit } from "../actions/action";

function FruitItem(props) {
  const dispatch = useDispatch();

  const onChooseFruit = () => {
    dispatch(changeFruit(props.name));
  };

  return (
    <div className="border p-2 bg-light" style={{ cursor: "pointer" }}>
      <h4 onClick={onChooseFruit}>{props.name}</h4>
    </div>
  );
}

export default FruitItem;
