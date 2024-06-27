import PropTypes from 'prop-types';

const CurrencyConverter = ({value, from, rate, to}) => {
    return (
        <div>
            <strong>{value}</strong>
            {from} {"=>"}
            <strong>{(value * rate).toFixed(2)}</strong>
            {to}
        </div>
    );
};

export default CurrencyConverter;

CurrencyConverter.propTypes = {
    value: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
};

