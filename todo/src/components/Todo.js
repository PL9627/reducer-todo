import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer';

const Todo = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
        <div>
            <div>

            </div>
        </div>
    )
}