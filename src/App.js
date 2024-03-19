import Pai from './components/atividade01/questao01/01Pai'
import * as PC from './components/atividade01/02MeuPC'
import { World, Arena } from './components/atividade01/03Batalha';

function App() {
    return (
        <div>
            <Pai />
            <h1 style={{ textAlign: 'center', marginTop: "50px" }}>MEU PC:</h1>
            <PC.PlacaMae nome="i5-7300" preco="$500" />
            <PC.Memoria nome="24gb memoria RAM" preco="$400" />
            <PC.PlacaDeVideo nome="Intel HD Graphics 620" preco="$300" />

            <h1 style={{ textAlign: 'center', marginTop: "50px" }}>A BATALHA:</h1>

            <World>
                <Arena />
            </World>
        </div>
    );
}

export default App;
