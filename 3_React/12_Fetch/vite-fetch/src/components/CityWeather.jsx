import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {url, API_Key, pixaUrl, pixaKey} from "../api.js";

const CityWeather = () => {
    const {city} = useParams();
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState(false);
    console.log(city);

    useEffect(() => {
        fetch(`${url}?q=${city}&appid=${API_Key}&units=metric`)
            .then(res => res.json())
            .then(data => setWeather(data));
    }, [city]);

    useEffect(() => {
        if (weather) {
            fetch(`${pixaUrl}?key=${pixaKey}&q=${weather.weather[0].main}&image_type=photo`)
                .then(res => res.json())
                .then(data => setImage(data.hits[0]));
        }
    }, [weather]);



    return (
        <div>
            CityWeather
            {weather && <h2>Pogoda dla: {city} - temperatura: {weather.main.temp} C </h2>}
            {image && <img src={image.webformatURL} alt={image.tags} />}
        </div>
    );
};

export default CityWeather;