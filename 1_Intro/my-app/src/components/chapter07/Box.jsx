import {useEffect, useState} from 'react';

const Box  = () => {
    const [color, setColor] = useState("green");
    useEffect(() => {
        const id = setInterval(() => {
            setColor(prevState => {
                return prevState === "green" ? "red" : "green";
            });
        }, 5000);
        return () => clearInterval(id);
    }, []);

    return (
        <div style={{width: "100px", height: "100px", backgroundColor : color}} />
    );
};

export default Box ;
