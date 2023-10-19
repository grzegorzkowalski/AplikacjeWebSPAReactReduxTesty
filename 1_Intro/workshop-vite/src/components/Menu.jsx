import React from 'react';

const Menu = ({list}) => {
    return (
        <ul>
            {
                list.map((el, i) => <li key={i}><a href={el.url}>{el.text}</a></li>)
            }
        </ul>
    );
};

export default Menu;
