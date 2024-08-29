import {useEffect, useState} from 'react';

const Box = () => {
    const [color, setColor] = useState("green");

    useEffect(() => {
        const id = setInterval(() => {
            setColor(prev => {
                return prev === "green" ? "red" : "green";
            });

            return () => clearInterval(id);
        }, 2500);
    }, []);

    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: color
        }} />
    );
};

export default Box;
