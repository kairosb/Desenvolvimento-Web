import React, { useContext } from "react";
import ComponenteNeto from "./ComponenteNeto2";
import { PokemonContext } from "./ComponenteAvo2";

const ComponenteFilho = () => {
    const { contador } = useContext(PokemonContext);

    

    return (
        <div>
            <h2>Componente Filho</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador + 1}.png`} alt="pokemon Filho" />
            <ComponenteNeto />
        </div>
    );
};

export default ComponenteFilho;
