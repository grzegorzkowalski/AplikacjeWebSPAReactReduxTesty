import React from "react";

const Chapter01Task01 = () => {
    const numberA = parseInt(prompt("Podaj liczbę A?"));
    const numberB = parseInt(prompt("Podaj liczbę B?"));
    return (
        <p>
            Suma to: {numberA + numberB}
        </p>
    );
};

export default Chapter01Task01;
