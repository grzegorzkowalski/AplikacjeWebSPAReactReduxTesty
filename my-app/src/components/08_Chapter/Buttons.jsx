import React from 'react';

const Buttons = () => {

    const clickHandler = () => {
        const numberA = parseInt(prompt("Podaj pierwszą liczbę?"));
        const numberB = parseInt(prompt("Podaj drugą liczbę?"));
        console.log(Math.pow(numberA, numberB));
        console.log(numberA**numberB);
    }

    const showWindowDimension = (e) => {
        console.log(`Wysokość okna: ${window.innerHeight}, szerokość okna: ${window.innerWidth}`);
        console.log(e);
    }

    return (
        <div>
            <button onClick={() => console.log("Pierwszy przycisk kliknięty.")}>Klik 1</button>
            <button onClick={clickHandler}>Klik 2</button>
            <button onClick={showWindowDimension}>Klik 3</button>
        </div>
    );
};

export default Buttons;
