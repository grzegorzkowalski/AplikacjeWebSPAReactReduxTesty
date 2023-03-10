const ClockTime = ({date}) => {
    return (
        <>
            <h2>{date.toLocaleTimeString()}</h2>
        </>
    );
};

export default ClockTime;
