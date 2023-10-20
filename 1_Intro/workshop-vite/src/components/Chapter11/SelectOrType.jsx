import React, {useState} from 'react';

const SelectOrType = ({carList}) => {
    const [cars, setCars] = useState([...carList, "Inny"]);
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const [newCar, setNewCar] = useState("");

    const setCar = () => {
        setCars(prev => {
            const tab = [...prev];
            tab.pop();
            tab.push(newCar);
            return tab;
        })
    };

    return (
        <div>
            <form>
                <select
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                >
                    {
                        cars.map((el, i) => <option key={i} value={el}>{el}</option>)
                    }
                </select>
            </form>
            {
                selectedCar === cars[3] && (
                    <form onSubmit={setCar}>
                        <input
                            type="text"
                            value={newCar}
                            onChange={(e) => setNewCar(e.target.value)}
                        />
                        <button>Zapisz</button>
                    </form>
                )
            }
        </div>
    );
};

export default SelectOrType;