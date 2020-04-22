import React, {useState} from 'react';

export const TodoForm = () => {
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const submitItem = e => {
        e.preventDefault();

        setNewTodo('');

        dispatch({type: "ADD_ITEM", payload: newTodo});
    };

    return(
        <form onSubmit={submitItem}>
            <input 
            type="text"
            name="name"
            value={state.name}
            onChange={handleChanges}/>
        </form>
    )
}