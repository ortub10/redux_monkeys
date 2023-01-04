import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortBy } from "lodash";
import { delSingleItem } from "../features/todoSlice";

function TodoList() {
  const todos_ar = useSelector((state) => state.todoSlice.todos_ar);
  const dispatch = useDispatch();

  const sort_ar = sortBy(todos_ar, "time");

  return (
    <div className="col-md-7">
      {sort_ar.map((item) => {
        return (
          <div key={item.id} className="border shadow-sm my-2 p-2">
            <button
              onClick={() => dispatch(delSingleItem({ delId: item.id }))}
              className="btn btn-danger float-end"
            >
              X
            </button>
            <h3>
              {item.name} - {item.time}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
