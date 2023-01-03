import React, { useContext } from "react";
import { AppContext } from "../context/context";

function FruitItem(props) {
  const { setFruit } = useContext(AppContext);
  const onChooseFruit = () => {
    // props.setFruitChoose(props.name);
    setFruit(props.name);
  };

  return (
    <div className="border p-2 bg-light" style={{ cursor: "pointer" }}>
      <h4 onClick={onChooseFruit}>{props.name}</h4>
    </div>
  );
}

export default FruitItem;
