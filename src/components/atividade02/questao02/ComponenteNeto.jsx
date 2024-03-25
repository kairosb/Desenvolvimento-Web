// ComponenteNeto.jsx
import React, { useContext } from "react";
import { PokemonContext } from "./ComponenteAvo";

const ComponenteNeto = () => {
    const numero = useContext(PokemonContext);

    return (
        <div>
            <h3>Componente Neto</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 2}.png`} alt='pokemon neto' />
        </div>
    );
};

export default ComponenteNeto;
