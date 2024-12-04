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
           if(ip) {
               console.log(ip);
           }
    }, [ip]);


    if (geoData) {
        return (
            <div>
                <p>{ip}</p>
            </div>
        );
    } else {
        return null
    }
};

export default IpFinder;
