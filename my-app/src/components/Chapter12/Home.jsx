import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const cities = ["Warszawa", "Konin", "Łódź", "Kraków"];
    const navigate = useNavigate();
    return (
        <>
            {
                cities.map(el => <li key={el}><button onClick={() => navigate(`/cityweather/${el}`)}>{el}</button></li>)
            }
        </>
    );
};

export default Home;
