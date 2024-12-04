import React, {useState} from 'react';
import SelectCar from "./SelectCar.jsx";

const Index = ({items}) => {
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
                <SelectCar
                    cars={cars}
                    selectedCar={selectedCar}
                    setSelectedCar={setSelectedCar}
                />
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

export default Index;
