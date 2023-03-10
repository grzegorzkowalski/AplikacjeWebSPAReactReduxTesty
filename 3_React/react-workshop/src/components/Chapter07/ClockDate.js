const ClockDate = ({date}) => {
    return (
        <>
            <h2>{date.toLocaleDateString()}</h2>
        </>
    );
};

export default ClockDate;
