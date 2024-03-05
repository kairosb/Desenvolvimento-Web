import React from 'react';
import { FuncaoMeusDados, SemReturnMeusDados, ComReturnMeusDados, ClassMeusDados } from './components/atividade00/MeusDados'
import MeusDadosProps from './components/atividade00/MeusDadosProps';
import kairo from './components/atividade00/kairo.jpg';
import estevam from './components/atividade00/WhatsApp Image 2024-03-05 at 10.30.53.jpeg'

function App() {
    return (
        <div>
            <FuncaoMeusDados />
            <SemReturnMeusDados />
            <ComReturnMeusDados />
            <ClassMeusDados />
            <MeusDadosProps
                imagem={kairo}
                nome="Kairo Sales"
                curso="Engenharia de Software"
                faculdade="UFC"
            />
            <MeusDadosProps
                imagem={estevam}
                nome="Luis Estevam"
                curso="Engenharia de Software"
                faculdade="UFC"
            />
        </div>
    );
}

export default App;
