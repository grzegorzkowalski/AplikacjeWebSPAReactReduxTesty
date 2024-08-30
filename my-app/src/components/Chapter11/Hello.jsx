import React, {useState} from 'react';

const Hello = () => {
    const [text, setText] = useState("Ty");
    return (
        <>
            <h1>{text}</h1>
            <form>
                <input
                    type="text"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
            </form>

        </>
    );
};

export default Hello;
