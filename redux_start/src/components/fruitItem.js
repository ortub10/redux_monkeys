import React from "react";

function FruitItem(props) {
  const onChooseFruit = () => {};

  return (
    <div className="border p-2 bg-light" style={{ cursor: "pointer" }}>
      <h4 onClick={onChooseFruit}>{props.name}</h4>
    </div>
  );
}

export default FruitItem;
