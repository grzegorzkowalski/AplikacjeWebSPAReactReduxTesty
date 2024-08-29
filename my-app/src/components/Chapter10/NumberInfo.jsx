import React from 'react';

const NumberInfo = ({number}) => {

    function isPrime(num) { if (num <= 1) return false; if (num <= 3) return true; if (num % 2 === 0 || num % 3 === 0) return false; for (let i = 5; i * i <= num; i += 6) { if (num % i === 0 || num % (i + 2) === 0) return false; } return true; }

    function isPowerOfTwo(n) {
        return Math.pow(2, Math.round(Math.log(n) / Math.log(2)));
    }

    return (
        <ul>
            <li>{number}</li>
            <li>{number % 2 === 0 ? "Parzysty" : "Nieparzysty"}</li>
            {isPrime(number) && <li>Liczba pierwsza</li>}
            {isPowerOfTwo && <li>Potęga liczby 2</li>}

        </ul>
    );
};

export default NumberInfo;
