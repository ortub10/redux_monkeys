import React from "react";
import { useSelector } from "react-redux";
import { sortBy } from "lodash";
import TodoItem from "./todoItem";

function TodoList() {
  const todos_ar = useSelector((state) => state.todoSlice.todos_ar);

  const sort_ar = sortBy(todos_ar, "time");

  return (
    <div className="col-md-7">
      {sort_ar.map((item) => {
        return <TodoItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default TodoList;
