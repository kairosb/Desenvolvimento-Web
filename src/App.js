import Questao01A from "./components/PROVA/Questao01";
import Questao02 from "./components/PROVA/Questao02";
import Questao03 from "./components/PROVA/Questao03";
import Questao04 from "./components/PROVA/Questao04";

function App() {
    return (
        <div style={{ backgroundColor: "#F0F0F0" }}>
            <div>
                <h1>Questao01</h1>
                <Questao01A />
            </div>
            <div>
                <h1>Questao02</h1>
                <Questao02 />
            </div>
            <div>
                <h1>Questao03</h1>
                <Questao03 />
            </div>
            <div>
                <h1>Questao04</h1>
                <Questao04 />
            </div>
        </div>
    );
}

export default App;
