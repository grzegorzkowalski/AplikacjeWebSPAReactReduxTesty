const Chapter02Task02 = () => {
    const randomNumber = () => {
        return Math.round(Math.random() * 9 + 1);
    }
    const numberA = randomNumber();
    const numberB = randomNumber();
    const answer = parseInt(prompt(`Podaj sumę liczb ${numberA} i ${numberB}`));

    if (answer === numberA + numberB) {
        return (
            <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: "green"
                }}
            >
                Odpowiedź poprawna.
            </div>
        );
    }
    else {
        return (
            <div style={{
                width: "200px",
                height: "200px",
                backgroundColor: "red"
            }}
            >
                Odpowiedź nie poprawna.
            </div>
        );
    }
};

export default Chapter02Task02;
