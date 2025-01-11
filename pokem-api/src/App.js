import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';
import './App.css';

function App() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
                setPokemon(response.data.results);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchPokemon();
    }, []);

    return (
        <div className="App">
            <div className="pokemon_container">
                {pokemon.map((poke, index) => (
                    <PokemonCard key={index} name={poke.name} url={poke.url}/>
                ))}
            </div>
        </div>
    );
}

export default App;
