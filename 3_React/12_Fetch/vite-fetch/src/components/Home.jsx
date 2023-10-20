import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    const cities = ["Warsaw", "Chicago", "Tokio", "Bangkok", "Mombasa", "Sydney", "Austin"];
    return (
        <div>
            Home
            <ul>
                {
                    cities.map((el, i) => <Link key={i} to={`/cityweather/${el}`}>{el}</Link>)
                }
            </ul>
        </div>
    );
};

export default Home;