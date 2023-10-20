import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cityweather">City Weather</Link></li>
                <li><Link to="/findweather">Find Weather</Link></li>
            </ul>

        </nav>
    );
};

export default Navigation;