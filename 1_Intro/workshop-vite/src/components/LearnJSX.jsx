const LearnJSX = () => {
    const numberA = parseInt(prompt("Podaj liczbę A?"));
    const numberB = parseInt(prompt("Podaj liczbę B?"));
    const operator = prompt("Wybierz operator (+,-,*,/)?");
    let el = "";
    switch (operator) {
        case "+":
            el = <h1>{numberA+numberB}</h1>;
            break;
        case "-":
            el = <h2>{numberA-numberB}</h2>;
            break;
        case "*":
            el = <h3>{numberA*numberB}</h3>;
            break;
        case "/":
            el = <h4>{numberA/numberB}</h4>;
            break;
        default:
            el = <h1>{numberA+numberB}</h1>;
    }
    return (
        <div>
            <p>Suma: {numberA + numberB}</p>
            {el}
        </div>
    );
};

export default LearnJSX;