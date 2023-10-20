import React, {useState} from 'react';
import ButtonToClick from "./ButtonToClick.jsx";

const ButtonCounter = () => {
    const [counter, setCounter] = useState(0);

    const addToCounter = (e) => {
        console.log(e);
        setCounter(prev => prev + 1);
    }

    return (
        <div>
            <h1>{counter}</h1>
            <ButtonToClick add={addToCounter} />
        </div>
    );
};

export default ButtonCounter;