import React from 'react';

const ButtonToClick = ({add}) => {
    const addByButton = (e) => {
        console.log(e);
        if (typeof add === "function") {
            add();
        }
        else {
            console.warn("Bad type")
        }
    }

    return (
        <div>
            <button onClick={() => addByButton("test")}>Click me</button>
        </div>
    );
};

export default ButtonToClick;