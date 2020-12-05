import React from 'react';

export function Pokemon({ pokemon }) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-card-name">
                <p>{pokemon.name}</p>
            </div>
            <div className="pokemon-card-type">
                <span>{pokemon.types[0]}</span>
                <span>{pokemon.types[1]}</span>
            </div>
            <div className="pokemon-card-stats">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="pokemon-card-image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div>
            <div className="pokemon-card-attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                    <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
                ))}
            </div>
        </div>
    );
};