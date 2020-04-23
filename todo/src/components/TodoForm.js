import React, { useState } from "react";
import styled from 'styled-components';

const AddBtn = styled.button`
    margin: 0 2%;
    background: white;
    border: 1px solid red;
    border-radius: 5px;
    color: red;

    &:hover {
        color: white;
        background-color: red;
    }
`;

const TodoForm = ({ state, dispatch }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChanges = (e) => {
    setNewTodo(e.target.value);
  };

  const submitItem = (e) => {
    e.preventDefault();

    setNewTodo("");

    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  return (
    <form onSubmit={submitItem}>
      <input
        type="text"
        name="title"
        value={state.title}
        onChange={handleChanges}
      />
      <AddBtn>Add Todo</AddBtn>
    </form>
  );
};

export default TodoForm;
