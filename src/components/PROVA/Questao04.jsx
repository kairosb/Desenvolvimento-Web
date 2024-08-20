import React, { useState, useEffect } from 'react';

const Questao04 = () => {
    // estado para armazenar as capitais e o estado de carregamento
    const [capitals, setCapitals] = useState([]);
    const [loading, setLoading] = useState(true);


    // função que retorna uma Promise com dados
    const fetchData = () => {
        return new Promise((resolve) => {
            const data = [
                { "capital": ["Dublin"], "population": 4994724 },
                { "capital": ["Nicosia"], "population": 1207361 },
                { "capital": ["Madrid"], "population": 47351567 }
            ];
            setTimeout(() => resolve(data), 1000); //simula um atraso na resposta
        });
    };

    useEffect(() => {
        // chama a função fetchData e atualiza o estado com os dados retornados
        fetchData()
            .then((data) => {
                setCapitals(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error("Erro ao buscar dados:", error);
            });
    }, []); // o array vazio como dependência faz com que o useEffect execute apenas uma vez após o primeiro render

    if (loading) {
        return <div>Carregando...</div>;
    }

    // ordena as capitais pela população em ordem crescente
    const capitaisOrdenadas = capitals.sort((a, b) => a.population - b.population);
    const menorPopulacao = capitaisOrdenadas[0];
    const maiorPopulacao = capitaisOrdenadas[capitaisOrdenadas.length - 1];

    return (
        <div>
            <h3>Capitais com Menor e Maior População</h3>
            <p>Menor população: {menorPopulacao.capital[0]} com {menorPopulacao.population} habitantes</p>
            <p>Maior população: {maiorPopulacao.capital[0]} com {maiorPopulacao.population} habitantes</p>
        </div>
    );
};

export default Questao04;