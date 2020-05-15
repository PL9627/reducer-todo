import React, { useReducer } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/todoReducer";
import styled from "styled-components";

const ClearBtn = styled.button`
  color: green;
  background: white;
  border: 1px solid green;
  border-radius: 5px;
  margin: 2% 0 0 0;

  &:hover {
    background-color: green;
    color: white;
  }
`;

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <div className="App-header">
        <h1>TO DO LIST</h1>
        <TodoForm state={state.todo} dispatch={dispatch} />
      </div>
      <TodoList todo={state.todo} dispatch={dispatch} />
      <ClearBtn className="clear" onClick={() => {dispatch({type: "CLEAR_TODO", })}}>Clear</ClearBtn>
    </div>
  );
}

export default App;
