// ComponenteFilho.jsx
import React, { useContext } from "react";
import ComponenteNeto from "./ComponenteNeto";
import { PokemonContext } from "./ComponenteAvo";

const ComponenteFilho = () => {
  const numero = useContext(PokemonContext);

  return (
    <div>
      <h2>Componente Filho</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${numero + 1}.png`} alt='pokemon filho' />
      <ComponenteNeto />
    </div>
  );
};

export default ComponenteFilho;
