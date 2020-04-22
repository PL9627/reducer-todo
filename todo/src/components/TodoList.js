import React from 'react';
import Todo from './Todo';

export const TodoList = props => {
    return (
        <div className="todoList">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} toggleTodo={props.dispatch}/>
            ))}
        </div>
    )
}