import React, { createContext, useState } from "react";
import ComponenteFilho from "./ComponenteFilho2";

const PokemonContext = createContext();

const ComponenteAvo = () => {
    const [contador, setContador] = useState(1);

    const incrementarContador = () => {
        setContador(contador + 3);
    };

    return (
        <PokemonContext.Provider value={{ contador, incrementarContador }}>
            <h1>Componente Avo</h1>
            <button onClick={incrementarContador}>Incrementar</button>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contador}.png`} alt="pokemon avo" />
            <ComponenteFilho />
        </PokemonContext.Provider>
    );
};

export default ComponenteAvo;
export { PokemonContext };
