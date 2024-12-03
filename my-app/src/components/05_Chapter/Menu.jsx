import React from 'react';

const Menu = ({elements}) => {
    return (
        <ul>
            {
                elements.map(el => <li key={el.url}><a href={el.url}>{el.text}</a></li> )
            }
        </ul>
    );
};

export default Menu;
