import React from "react";
import './MeusDadosProps.css'


const MeusDadosProps = ({ imagem, nome, curso, faculdade }) => {
    return (
        <div className='containerProps'>
            <div className='dados'>
                <img src={imagem} alt='' className='imagem' />
                <div>
                    <h1>Nome: {nome}</h1>
                    <h1>Curso: {curso}</h1>
                    <h1>Universidade: {faculdade}</h1>
                </div>
            </div>
            <br />
        </div>
    )
}

export default MeusDadosProps;