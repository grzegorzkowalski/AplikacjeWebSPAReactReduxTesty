const Chapter01Task04 = () => {
    const numberA = parseInt(prompt("Podaj liczbę A?"));
    const numberB = parseInt(prompt("Podaj liczbę B?"));
    const operator = prompt("Wybierz rodzaj operacji (+,-,*,/)?");
    let element = "";
    switch (operator) {
        case "+":
            element = <h1>Wynik {numberA} + {numberB} = {numberA + numberB}.</h1>;
            break;
        case "-":
            element = <h2>Wynik {numberA} - {numberB} = {numberA - numberB}.</h2>;
            break;
        case "*":
            element = <h3>Wynik {numberA} * {numberB} = {numberA * numberB}.</h3>;
            break;
        case "/":
            element = <h4>Wynik {numberA} / {numberB} = {numberA / numberB}.</h4>;
            break;
        default:
            element = <h5>Błędne dane wejściowe.</h5>
    }
    return element;
};

export default Chapter01Task04;
