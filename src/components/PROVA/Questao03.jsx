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

    return (
        <div>
            <h3>Capitais com Menor e Maior População</h3>
            <h4>Menor população:</h4>
            <p>{capitaisOrdenadas[0].capital[0]} com {capitaisOrdenadas[0].population} habitantes</p>
            <p>{capitaisOrdenadas[1].capital[0]} com {capitaisOrdenadas[1].population} habitantes</p>
            <h4>Maior população:</h4>
            <p>{capitaisOrdenadas[capitaisOrdenadas.length - 1].capital[0]} com {capitaisOrdenadas[capitaisOrdenadas.length - 1].population} habitantes</p>
            <p>{capitaisOrdenadas[capitaisOrdenadas.length - 2].capital[0]} com {capitaisOrdenadas[capitaisOrdenadas.length - 2].population} habitantes</p>
        </div>
    );
};

export default Questao03;