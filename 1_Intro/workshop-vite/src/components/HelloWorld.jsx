import {useEffect, useState} from 'react';

const HelloWorld = () => {
    const [text, setText] = useState("Hello, World!");

    useEffect(() => {
        const id = setTimeout(() => {
            setText("Hi, Everyone!");
        }, 5000);

        return () => clearTimeout(id);

    }, []);

    return (
        <div>
            <h1>{text}</h1>
        </div>
    );
};

export default HelloWorld;