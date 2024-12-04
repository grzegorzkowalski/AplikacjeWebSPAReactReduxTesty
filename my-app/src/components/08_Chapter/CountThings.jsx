import React, {useEffect, useState} from 'react';

const CountThings = () => {
    const [balans, setBalans] = useState(10000);
    const [age, setAge] = useState(38);

    const clickHandler = (callback, value) => {
        callback(prev => prev + value);
    }

    useEffect(() => {
        console.log("Wow robie się bogaty");
    }, [balans]);

    useEffect(() => {
        console.log("Ojeje robie się coraz starszy");
    }, [age]);

    return (
        <div>
            <p>💰 so much money: {balans}</p>
            <p>Age: {age}</p>
            <button onClick={() => clickHandler(setBalans, 1000)}>Get rich!</button>
            <button onClick={() => clickHandler(setAge, 1)}>Get older :(</button>
        </div>
    );
};

export default CountThings;
