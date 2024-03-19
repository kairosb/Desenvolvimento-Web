const Filho = ({ altura, peso }) => {
    const calcularIMC = () => {
        return peso / (altura * altura);
    };

    const mensagem = () => {
        const imc = calcularIMC();
        if (imc < 18) {
            return <h4>Abaixo do peso</h4>;
        } else if (imc > 25) {
            return <h4>Acima do peso</h4>;
        } else {
            return <h4>Peso ideal</h4>;
        }
    };

    return (
        <div>
            <h3>Componente Filho calculando IMC</h3>
            <h4>IMC do Pai: {calcularIMC()}</h4>
            {mensagem()}
        </div>
    );
};

export default Filho;
