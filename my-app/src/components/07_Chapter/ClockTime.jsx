import React from 'react';

const ClockTime = ({date}) => {
    return (
        <div>
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    );
};

export default ClockTime;
