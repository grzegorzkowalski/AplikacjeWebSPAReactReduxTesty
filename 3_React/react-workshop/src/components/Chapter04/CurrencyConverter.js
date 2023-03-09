const CurrencyConverter = ({from, to, value, rate}) => {
    return (
        <div>
            <strong>{value} </strong>{from} => <strong>{rate*value}</strong> {to}
        </div>
    );
};

export default CurrencyConverter;
