import {useState, useEffect} from "react";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState([]);
    const [loadStatus, setLoadStatus] = useState('Ładowanie danych...');
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(data => data.json())
            .then(result => {
                setLoadStatus('');
                setPokemon(result.results);
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>{loadStatus}
            <ul>
                {pokemon && pokemon.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    )
}
