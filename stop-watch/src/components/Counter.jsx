import React from 'react';
import List from "./List";

const Counter = () => {
    return (
        <div>
            <div>
                <div>
                    <button>start</button>
                    <button disabled>stop</button>
                    <h1>4</h1>
                </div>
                <div>
                    <button>zapisz</button>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Counter;
