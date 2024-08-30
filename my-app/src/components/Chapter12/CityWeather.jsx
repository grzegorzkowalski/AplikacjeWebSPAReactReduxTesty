import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {OWApiKey} from "../../consts/apiKeys.js";

const CityWeather = () => {
    const [weather, setWeather] = useState(false);
    const [temp, setTemp] = useState('');
    const [description, setDescription] = useState('');
    const {city} = useParams();
    const url = "https://api.openweathermap.org/data/2.5/weather"

    useEffect(() => {
        fetch(`${url}?q=${city}&appid=${OWApiKey}&units=metric&lang=pl`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setTemp(data.main.temp)
                setDescription(data.weather[0].description)
            } )
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <p>{city}</p>
            {weather && <p>Temperatura: {temp}</p>}
            {weather && <p>Opis: {description}</p>}
        </div>
    );
};

export default CityWeather;
