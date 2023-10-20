import {createContext, useContext, useState} from "react";

const CounterContext = createContext();

const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState({
        isCounting: false,
        value: 0
    });

    const value = {
        counter,
        setCounter
    }

    return (
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    );
};

export default CounterProvider;

export const useCounterContext = useContext(CounterContext);

