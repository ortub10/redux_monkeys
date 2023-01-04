import React from "react";
import { useDispatch } from "react-redux";
import { delSingleItem } from "../features/todoSlice";

function TodoItem(props) {
  const dispatch = useDispatch();
  const { item } = props;

  const onRemoveClick = () => {
    dispatch(delSingleItem({ delId: item.id }));
  };
  return (
    <div>
      <div className="border shadow-sm my-2 p-2">
        <button onClick={onRemoveClick} className="btn btn-danger float-end">
          X
        </button>
        <h3>
          {item.name} - {item.time}
        </h3>
      </div>
    </div>
  );
}

export default TodoItem;
