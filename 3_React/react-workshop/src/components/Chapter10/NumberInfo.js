const NumberInfo = ({number}) => {
    function powerOfTwo(x) {
        return Math.log2(x) % 1 === 0;
    }

    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num > 1;
    }

    return (
        <ul>
            <li>{number}</li>
            <li>{number % 2 === 0 ? "Liczba parzysta" : "Liczba nieparzysta"}</li>
            <li>{isPrime(number) && "Liczba pierwsza"}</li>
            <li>{powerOfTwo(number) && "Potęga liczby 2"}</li>

        </ul>
    );
};

export default NumberInfo;
