import React from 'react';
import './Pokemon.css';
import { Card, CardImg, CardBody, Button } from 'reactstrap';

export function Pokemon({ pokemon }) {
    return (
        <div className="col-md-4 col-xs-12 chard" >
        <Card>
            <div className="pokemon-card-name">
            <p>{pokemon.name}</p>
            </div>
            <div className="pokemon-card-meta">
                <span>{pokemon.maxHP}</span>
                <span>{pokemon.maxCP}</span>
            </div>
            <div className="pokemon-card-image">
            <CardImg className="pokemon-card-image" top src={pokemon.image} alt={pokemon.name} />
            </div>
            <CardBody>
            <div className="pokemon-card-attacks">
                {pokemon.attacks.special.slice(0, 3).map(attack => (
                <Button key={`${attack.name}-${attack.damage}`}>{attack.name}</Button>
                ))}
            </div>
            </CardBody>
        </Card>
      </div>
    );
}


/* <div className="pokemon">
<div className="pokemon-card-name">
    <p>{pokemon.name}</p>
</div>
<div className="pokemon-card-meta">
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
</div> */