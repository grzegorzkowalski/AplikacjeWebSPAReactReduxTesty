import React from 'react';
import List from "./List";
import {useDispatch, useSelector} from "react-redux";
import {addToList, startCounter, stopTimer} from "../redux/actions.js";

const Counter = () => {
    const value = useSelector(state => state.counter.value);
    const isCounting = useSelector(state => state.counter.isCounting);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div>
                    <button onClick={() => dispatch(startCounter())}>start</button>
                    <button disabled={!isCounting} onClick={() => dispatch(stopTimer())}>stop</button>
                    <h1>{value}</h1>
                </div>
                <div>
                    <button onClick={() => dispatch(addToList(value))}>zapisz</button>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Counter;
