import {useState} from "react";

const AddTwoNumbers = () => {
    const [numA, setNumA] = useState(0);
    const [numB, setNumB] = useState(0);

    return (
        <form>
            <input
                value={numA}
                onChange={e => setNumA(e.target.value)}
            />
            <input
                value={numB}
                onChange={e => setNumB(e.target.value)}
            />
            <h1>{Number(numA) && Number(numB) ? Number(numA) + Number(numB) : "Podaj dwie liczby"}</h1>
        </form>
    );
};

export default AddTwoNumbers;
