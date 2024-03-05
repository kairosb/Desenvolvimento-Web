import './Temperatura.css'

const celsiusParaFahrenheit = (c) => {
    return (c * 9 / 5) + 32;
}

const fahrenheitParaCelsius = (f) => {
    return (f - 32) * 5 / 9;
}

const kelvin = (k) => {
    const f = (k - 273, 15) * 9 / 5 + 32;
    const c = (k - 273.15);

    return { f, c };
}

export const Temperatura = () => {

    return (
        <div className='containerTemp'>
            <h1 className='titulo'>TEMPERATURA</h1>
            <div className='itens'>
                <div>200 graus Celsius em Fahrenheit é igual a: {celsiusParaFahrenheit(200)}</div>
                <div>50 graus Fahrenheit em Celsius é igual a: {fahrenheitParaCelsius(50)}</div>
                <div>100 graus Kelvin em Fahrenheit é igual a: {kelvin(100).f}°F. E em Celsius é igual a: {kelvin(100).c}°C</div>
            </div>
        </div>
    )
}