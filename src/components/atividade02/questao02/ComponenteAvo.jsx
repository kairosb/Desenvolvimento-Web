import React, { createContext } from "react";
import ComponenteFilho from "./ComponenteFilho";

const PokemonContext = createContext();

const ComponenteAvo = () => {
    const numero = 1;

    return (
        <PokemonContext.Provider value={numero}>
            <h1>Componente Avo</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero}.png`} alt='pokemon avo' />
            <ComponenteFilho />
        </PokemonContext.Provider>
    );
};

export default ComponenteAvo;
export { PokemonContext };
