import React from 'react';
import './PokemonCard.css';

const PokemonCard = ({ name, url }) => {
    const getIdFromUrl = (url) => {
        const id = url.split('/').filter(Boolean).pop();
        return id;
    };

    const pokemonId = getIdFromUrl(url);
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    return (
        <div className="pokemon-card">
            <img src={imageUrl} alt={name} className="pokemon-image" />
            <h2>{name}</h2>
        </div>
    );
};

export default PokemonCard;
