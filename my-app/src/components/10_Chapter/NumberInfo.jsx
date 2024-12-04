import React from 'react';

const NumberInfo = ({number}) => {

    function isPrime(number) {
        let start = 2;
        const limit = Math.sqrt(number);
        while (start <= limit) {
            if (number % start++ < 1) return false;
        }
        return number > 1;
    }

    function powerOfTwo(x) {
        return (Math.log(x)/Math.log(2)) % 1 === 0;
    }

    return (
        <ul>
            <li>{number}</li>
            <li>{number % 2 === 0 ? "Parzysta" : "Nieparzysta"}</li>
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {powerOfTwo(number) && <li>Potęga liczby drugiej</li>}
        </ul>
    );
};

export default NumberInfo;
