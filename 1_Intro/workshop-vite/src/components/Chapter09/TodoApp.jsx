import React, {useState} from 'react';
import TodoList from "./TodoList .jsx";
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
    const [item, setItem] = useState("");
    const [items, setItems] = useState([]);

    const addToList = (e, title) => {
        e.preventDefault();
        setItems(prev => [...prev, {title, id: uuidv4()}])
        setItem("");
    }

    const removeFromList = (id) => {
        setItems(prev => prev.filter(el => el.id !== id))
    }

    // const setItemWithValidate = (e) => {
    //     //sprawdz
    //     setItem(e.target.value)
    // }

    return (
        <div>
            <form onSubmit={(e) => addToList(e, item)}>
                <input
                    type="text"
                    value={item}
                    onChange={e => setItem(e.target.value)}
                />
                <button>Dodaj</button>
            </form>
            <TodoList items={items} removeItem={removeFromList} />
        </div>
    );
};

export default TodoApp;