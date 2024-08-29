import React from 'react';
import GrandchildComponent from "./GrandchildComponent.jsx";

const ChildComponent = () => {
    return (
        <div>
            <p>To jest Child Component</p>
            <GrandchildComponent>
                <h3>Tu wyświetlają się dzieci GrandchildComponent</h3>
            </GrandchildComponent>
        </div>
    );
};

export default ChildComponent;
