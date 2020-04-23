import React, { useReducer } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <div className="App-header">
        <TodoForm state={state.todo} dispatch={dispatch} />
      </div>
      <TodoList todo={state.todo} dispatch={dispatch} />
      <button className="clear" onClick={() => {dispatch({type: "CLEAR_TODO", })}}>Clear</button>
    </div>
  );
}

export default App;
