import React, {useState} from 'react';

const EventsTest = () => {
    const [text, setText] = useState();
    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: "pink"
        }}
            onClick={() => setText("click")}
            onMouseEnter={() => setText("najechane")}
            onMouseLeave={() => setText("zjechane")}
        >
            {text}
        </div>
    );
};

export default EventsTest;
