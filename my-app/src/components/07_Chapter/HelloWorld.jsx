import React, {useEffect, useState} from 'react';

const HelloWorld = () => {
    const [text, setText] = useState("Hello, World!");

    useEffect(() => {
        const id = setTimeout(() => setText("Hi, Everyone!"), 5000);

        return () => clearTimeout(id);
    }, []);


    return (
        <div>
            <h3>{text}</h3>
        </div>
    );
};

export default HelloWorld;
