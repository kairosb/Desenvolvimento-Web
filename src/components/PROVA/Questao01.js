import React from 'react';

const Questao01A = () => {
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ];

    return (
        <div>
            {
                //chamando o componente Questao01B passando a props
            }
            <Questao01B lista={lista} />
        </div>
    );
}

function Questao01B({ lista }) {
    return (
        <div>
            {
                //usando o map para percorrer toda a lista dos objetos
            }
            {lista.map((item, index) => {
                //procurando o maior valor entre os elementos
                const max = Math.max(item.a, item.b, item.c);
                return (
                    <div key={index}>
                        <p>Maior elemento do objeto {index + 1}: {max}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Questao01A;