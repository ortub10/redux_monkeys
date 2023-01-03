import React from "react";
import FruitInput from "./fruitInput";
import FruitItem from "./fruitItem";

function FruitsList(props) {
  return (
    <div className="col-lg-6 mx-auto">
      <FruitInput />
      {props.fruits_ar.map((item) => {
        return <FruitItem key={item} name={item} />;
      })}
    </div>
  );
}

export default FruitsList;
