import React, {useState} from 'react';

const SelectOrType = ({items}) => {
    const [cars, setCars] = useState([...items, "Inne"]);
    const [selectedCar, setSelectedCar] = useState(cars.length > 0 ? cars[0] : '');
    const [changeCar, setChangeCar] = useState(cars[cars.length - 1]);

    const handleChangingLastCar = (name) => {
        console.log(cars, name)
        setCars(prev => {
            const newCarList = [...prev];
            newCarList.pop();
            newCarList.push(name);
            return newCarList;
        })
    }

    return (
        <div>
            <h2>{selectedCar}</h2>
            <form onSubmit={e => e.preventDefault()}>
                <select
                    value={selectedCar}
                    onChange={e => setSelectedCar(e.target.value)}
                >
                    {
                        cars.map((el, i) => <option key={i} value={el}>{el}</option>)
                    }
                </select>
                {
                    selectedCar === cars[cars.length - 1]
                    && (
                        <div>
                            <input
                                value={changeCar}
                                onChange={e => setChangeCar(e.target.value)}
                            />
                            <button onClick={() => handleChangingLastCar(changeCar)}>Zmień</button>
                        </div>
                    )
                }
            </form>
        </div>
    );
};

export default SelectOrType;
