import React, {useEffect} from 'react';
import {
    increment,
    start,
    stop,
    addToList
} from "../redux/features/counterSlice";
import {useDispatch, useSelector} from "react-redux";

const StoperRt = () => {
    const value = useSelector(state => state.counter.value);
    const isCounting = useSelector(state => state.counter.isCounting);
    const list = useSelector(state => state.counter.list);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isCounting) {
            const intervalID = setInterval(() => {
                dispatch(increment())
            }, 1000)
            return () => clearInterval(intervalID);
        }
    }, [isCounting])

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(start())}>start</button>
                    <button onClick={() => dispatch(stop())}>stop</button>
                    <h1>{value}</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(addToList())}>zapisz</button>
                    <ul>
                        {
                            list.map((el, i) => <li key={i}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StoperRt;