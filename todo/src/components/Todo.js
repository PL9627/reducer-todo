import React from "react";
import styled from 'styled-components';

const Card = styled.p`
    width: 10%;
    margin: 2% 0 1% 44.5%;
    border: 1px solid blue;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    color: blue;

    &:hover {
        background: blue;
        color: white;
    }
`;

const Todo = (props) => {
  return (
    <div
      className={`item${props.item.completed ? "completed" : ""}`}
      onClick={() => 
        props.toggleToDo({ type: "TOGGLE_TODO", payload: props.item.id })
      }
    >
      <Card>{props.item.title}</Card>
    </div>
  );
};

export default Todo;
