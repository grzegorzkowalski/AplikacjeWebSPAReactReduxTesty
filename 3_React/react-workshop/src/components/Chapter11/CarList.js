import {useState} from "react";

const CarList = () => {
    const [car, setCar] = useState("Ford");
    const selectHandler = (e) => {
        setCar(e.target.value);
    }
    return (
        <form>
            <h1>{car}</h1>
            <select
                value={car}
                onChange={selectHandler}
            >
                <option value="Dodge">Dodge</option>
                <option value="Ford">Ford</option>
                <option value="Subaru">Subaru</option>
            </select>
        </form>
    );
};

export default CarList;
