import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">App</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/cityweather">CityWeather</Link>
                    </li>
                    <li>
                        <Link to="/findweather">FindWeather</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>

    );
};

export default Navigation;