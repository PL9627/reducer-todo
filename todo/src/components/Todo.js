import React from 'react';

const Todo = props => {
    return(
        <div className={`item${props.item.completed ? "completed" : ""}`}
        onClick={() => {props.toggleToDoItem()}}>
            <p>{props.item.todo}</p>
        </div>
    )
}

export default Todo;