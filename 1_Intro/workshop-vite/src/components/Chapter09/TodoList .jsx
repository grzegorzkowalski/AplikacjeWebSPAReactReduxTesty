import React from 'react';
import TodoItem from "./TodoItem.jsx";

const TodoList = ({items, removeItem}) => {
    return (
        <ul>
            {
                items.map(el => <TodoItem key={el.id} el={el} deleteEl={removeItem} /> )
            }
        </ul>
    );
};

export default TodoList;