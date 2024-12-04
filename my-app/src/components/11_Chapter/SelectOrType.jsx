import React, {useState} from 'react';

const SelectOrType = ({items}) => {
    const [cars, setCars] = useState([...items, "Inne"]);
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [inputCar, setInputCar] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setCars(prev => {
            const temp = [...prev];
            temp.pop();
            temp.push(inputCar);
            return temp;
        })
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <select
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                >
                    {
                        cars.map((el, i) => <option value={el} key={i}>{el}</option>)
                    }
                </select>
                {
                    selectedCar === cars[cars.length-1]
                    && <div>
                        <input
                            type="text"
                            value={inputCar}
                            onChange={(e) => setInputCar(e.target.value)}
                        />
                        <button>Zapisz</button>
                    </div>
                }
            </form>
        </>
    );
};

export default SelectOrType;
