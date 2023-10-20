import React, {useState} from 'react';

const MyButton = () => {
    const [innerState, setInnerState] = useState(false);
    return (
        <button onClick={() => setInnerState(prev => !prev)}>
            { innerState ? "TAK" : "NIE" }
        </button>
    );
};

export default MyButton;