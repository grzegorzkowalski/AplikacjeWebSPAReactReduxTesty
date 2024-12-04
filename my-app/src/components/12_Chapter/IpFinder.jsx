import React, {useEffect, useState} from 'react';

const IpFinder = () => {
    const [ip, setIP] = useState("");
    const [geoData, setGeoData] = useState("");

    useEffect(() => {
        fetch('https://api.ipify.org')
            .then(res => res.text())
            .then(res => setIP(res))
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        fetch(`http://ip-api.com/json/${ip}`)
            .then(res => res.json())
            .then(ipDetails => setGeoData(ipDetails));
    }, [ip]);


    if (geoData) {
        return (
            <div>
                <h2>IP: {geoData.query}</h2>
                <p>Miasto: {geoData.city} </p>
                <p>Kraj: {geoData.country}</p>
                <p>Strefa czasowa: {geoData.timezone}</p>
            </div>
        );
    } else {
        return null
    }
};

export default IpFinder;
