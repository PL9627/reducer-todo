import React from 'react';

export const Todo = props => {
    return(
        <div className={`item${props.item.completed ? "completed" : ""}`}
        onClick={() => {props.toggleToDoItem()}}>
            <p>{props.item.todo}</p>
        </div>
    )
}