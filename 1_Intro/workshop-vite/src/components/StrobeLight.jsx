import React, {useEffect, useState} from 'react';

const StrobeLight = ({color, frequency}) => {
    const [elColor, setElColor] = useState("white");

    useEffect(() => {
        const id = setInterval(() => {
            setElColor(prev => prev === "white" ? color : "white");
        }, frequency);

        return () => clearInterval(id);
    }, []);

    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: elColor
        }} />
    );
};

export default StrobeLight;