import {useState, useEffect} from "react";
import ClockTime from "./ClockTime";
import ClockDate from "./ClockDate";

const Clock = () => {
    const [stateDate, setStateDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setStateDate(new Date());
        }, 1000);
        return () => clearInterval(intervalID);
    }, [])
    return (
        <>
            <ClockTime date={stateDate} />
            <ClockDate date={stateDate} />
        </>
    );
};

export default Clock;
