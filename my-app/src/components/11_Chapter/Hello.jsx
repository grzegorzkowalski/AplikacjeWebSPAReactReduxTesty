import React, {useState} from 'react';

const Hello = () => {
    const [text, setText] = useState("Ty");


    return (
        <form>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <h1>{text}</h1>

        </form>
    );
};

export default Hello;
