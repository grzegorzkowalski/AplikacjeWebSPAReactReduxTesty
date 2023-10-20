import {createContext, useContext, useState} from "react";

const CounterContext = createContext({
    counter: {
        isCounting: false,
        value: 0,
        list: []
    },
    setCounter: () => null
});

const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState({
        isCounting: false,
        value: 0,
        list: []
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

export {CounterContext};

