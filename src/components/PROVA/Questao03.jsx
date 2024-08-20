import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    // estado para armazenar as capitais e o estado de carregamento
    const [capitals, setCapitals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // função assíncrona para buscar dados da API
        const fetchData = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population");
                const data = await response.json();
                setCapitals(data);
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.error("Erro ao buscar dados:", error);
            }
        };

        fetchData();
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

export default Questao03;