import React, { useContext } from "react";
import { PokemonContext } from "./ComponenteAvo2";

const ComponenteNeto = () => {
    const { contador } = useContext(PokemonContext);

    return (
        <div>
            <h3>Componente Neto</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 2}.png`} alt="pokemon Neto" />
        </div>
    );
};

export default ComponenteNeto;
