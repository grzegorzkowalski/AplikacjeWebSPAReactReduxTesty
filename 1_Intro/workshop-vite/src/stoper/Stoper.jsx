import {CounterContext} from "../context/counterContext.jsx";
import {useContext, useEffect} from "react";

const Stoper = () => {
    const {counter, setCounter} = useContext(CounterContext);

    useEffect(() => {
        if (counter.isCounting) {
            const id = setInterval(() => {
                    setCounter(prev => {
                        return {
                            ...prev,
                            value: prev.value + 1
                        }
                    });
            }, 1000);

            return () => clearInterval(id);
        }
    }, [counter]);
    return (
        <div>
            <div>
                <div>
                    <button
                        disabled={counter.isCounting ? true : ""}
                        onClick={() => setCounter(prev => {
                            return {
                                ...prev,
                                isCounting: true
                            }
                        })}
                    >
                        start
                    </button>
                    <button
                        disabled={counter.isCounting ? "" : true}
                        onClick={() => setCounter(prev => {
                            return {
                                ...prev,
                                isCounting: false
                            }
                        })}
                    >
                        stop
                    </button>
                    <h1>{counter.value}</h1>
                </div>
                <div>
                    <button
                        onClick={() => setCounter(prev => {
                            return {
                                ...prev,
                                list: [...prev.list, prev.value]
                            }
                    })}>
                        zapisz
                    </button>
                    <ul>
                        {
                            counter.list.map((el, i) => <li key={i}>{el}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stoper;