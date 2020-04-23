import React from "react";

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
      onClick={() => {
        props.toggleToDo({ type: "TOGGLE_TODO", payload: props.item.id });
      }}
    >
      <p>{props.item.title}</p>
    </div>
  );
};

export default Todo;
