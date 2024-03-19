import Pai from './components/atividade01/questao01/01Pai'
import { PlacaMae as PCPlacaMae, Memoria as PCMemoria, PlacaDeVideo as PCPlacaDeVideo } from './components/atividade01/02MeuPC';
import { World, Arena } from './components/atividade01/03Batalha';

function App() {
    return (
        <div>
            <Pai />
            <h1 style={{ textAlign: 'center', marginTop: "50px" }}>MEU PC:</h1>
            <PCPlacaMae nome="i5-7300" preco="$500" />
            <PCMemoria nome="24gb memoria RAM" preco="$400" />
            <PCPlacaDeVideo nome="Intel HD Graphics 620" preco="$300" />

            <h1 style={{ textAlign: 'center', marginTop: "50px" }}>A BATALHA:</h1>

            <World>
                <Arena />
            </World>
        </div>
    );
}

export default App;
