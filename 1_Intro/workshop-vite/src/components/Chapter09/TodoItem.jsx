import React from 'react';

const TodoItem = ({el, deleteEl}) => {
    return (
        <li onClick={() => deleteEl(el.id)}>{el.title}</li>
    );
};

export default TodoItem;