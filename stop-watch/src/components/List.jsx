import React from 'react';
import {useSelector} from "react-redux";

const List = () => {
    const list = useSelector(state => state.list);
    return (
        <ul>
            {
                list.map((el, i) => <li key={i}>{el}</li>)
            }
        </ul>
    );
};

export default List;
