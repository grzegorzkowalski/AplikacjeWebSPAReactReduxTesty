import React, {useEffect, useState} from 'react';
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const id = setInterval(el => setDate(new Date()), 1000);

        return () => clearInterval(id);
    }, []);


    return (
        <div>
            <ClockTime date={date} />
            <ClockDate date={date}  />
        </div>
    );
};

export default Clock;
