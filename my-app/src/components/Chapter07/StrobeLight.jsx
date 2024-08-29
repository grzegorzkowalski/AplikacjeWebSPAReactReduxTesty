import React, {useEffect, useState} from 'react';

const StrobeLight = ({color, frequency}) => {
    const [backgroundColor, setBackgroundColor] = useState("white");

    useEffect(() => {
        const id = setInterval(() => {
            setBackgroundColor(prev => {
                return prev === "white" ? color : "white";
            });

            return () => clearInterval(id);
        }, frequency);
    }, []);
    return (
        <div style={{
            width: "500px",
            height: "100px",
            backgroundColor
        }} />
    );
};

export default StrobeLight;
