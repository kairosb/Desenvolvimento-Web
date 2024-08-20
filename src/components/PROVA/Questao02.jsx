import React, { useState } from 'react';

const Questao02 = () => {

    //usando o useState para guardar a informação de qual imagem mostrar
    const [isFront, setIsFront] = useState(true);


    //função para modificar a variavel que verifica qual imagem deve ser mostrada
    const mudarPosicao = () => {
        setIsFront(!isFront);
    };

    //guardando a url das imagens para deixar mais consistente
    const frontImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
    const backImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png";

    return (
        <div>
            {
                //usando a variavel para decidir qual imagem sera mostrada
            }
            <img src={isFront ? frontImage : backImage} alt="Pikachu" />
            <button onClick={mudarPosicao}>
                {isFront ? 'Mostrar Costas' : 'Mostrar Frente'}
            </button>
        </div>
    );
};

export default Questao02;