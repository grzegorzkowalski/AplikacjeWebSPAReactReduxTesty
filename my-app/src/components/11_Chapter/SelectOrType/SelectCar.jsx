import React from 'react';

const SelectCar = ({selectedCar, setSelectedCar, cars}) => {
    return (
        <select
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
        >
            {
                cars.map((el, i) => <option value={el} key={i}>{el}</option>)
            }
        </select>
    );
};

export default SelectCar;
