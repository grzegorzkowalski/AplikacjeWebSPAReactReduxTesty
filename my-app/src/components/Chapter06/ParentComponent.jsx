import React from 'react';
import ChildComponent from "./ChildComponent.jsx";

const ParentComponent = () => {
    return (
        <div>
            <p>To jest Parent Component</p>
            <ChildComponent />
        </div>
    );
};

export default ParentComponent;
