import {useState, useEffect} from "react";

const StrobeLight = ({color, frequency }) => {
    const [bgColor, setBgColor] = useState(color);

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log(color, bgColor);
            if (bgColor === "white") {
                console.log("in bg");
                setBgColor(color);
            }
            else {
                console.log("in white");
                setBgColor("white")
            }
        }, frequency);
        return () => {
            clearInterval(intervalID);
        }
    });

    return (
        <div style={{
            width: "500px",
            height: "50px",
            backgroundColor: bgColor
            }}
        />
    );
};

export default StrobeLight;
