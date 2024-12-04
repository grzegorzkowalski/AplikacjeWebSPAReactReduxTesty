import React from 'react';

const ClockDate = ({date}) => {
    return (
        <div>
            <h2>{date.toLocaleDateString()}</h2>
        </div>
    );
};

export default ClockDate;
