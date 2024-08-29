import React from 'react';

const ShowUserFunc = ({name, surname}) => {
    const clickHandler = (e) => {
        console.log(e);
        console.log(name, surname);
    }

    return (
        <div>
            <button onClick={(e) => clickHandler(e)}>Dane użytkownika</button>
        </div>
    );
};

export default ShowUserFunc;
