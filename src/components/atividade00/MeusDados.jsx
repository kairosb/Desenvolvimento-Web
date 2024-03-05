import React from 'react';
import './MeusDados.css';
import kairo from './kairo.jpg';
import estevam from './WhatsApp Image 2024-03-05 at 10.30.53.jpeg'

function FuncaoMeusDados() {
    return (
        <div className='container'>
            <div className='dados'>
                <img src={kairo} alt='' className='imagem' />
                <div>
                    <h1>Nome: Kairo Matheus Sales Barbosa</h1>
                    <h1>Curso: ES</h1>
                    <h1>Universidade: UFC</h1>
                </div>
            </div>
            <br />
            <div className='dados'>
                <img src={estevam} alt='' className='imagem' />
                <div>
                    <h1>Nome: Luis Estevam Rosa Chaves</h1>
                    <h1>Curso: ES</h1>
                    <h1>Universidade: UFC</h1>
                </div>
            </div>
            <br />


        </div>
    );
}

const SemReturnMeusDados = () => (
    <div className='container'>
        <div className='dados'>
            <img src={kairo} alt='' className='imagem' />
            <div>
                <h1>Nome: Kairo Matheus Sales Barbosa</h1>
                <h1>Curso: ES</h1>
                <h1>Universidade: UFC</h1>
            </div>
        </div>
        <br />
        <div className='dados'>
            <img src={estevam} alt='' className='imagem' />
            <div>
                <h1>Nome: Luis Estevam Rosa Chaves</h1>
                <h1>Curso: ES</h1>
                <h1>Universidade: UFC</h1>
            </div>
        </div>
        <br />


    </div>
);

const ComReturnMeusDados = () => {
    return (
        <div className='container'>
            <div className='dados'>
                <img src={kairo} alt='' className='imagem' />
                <div>
                    <h1>Nome: Kairo Matheus Sales Barbosa</h1>
                    <h1>Curso: ES</h1>
                    <h1>Universidade: UFC</h1>
                </div>
            </div>
            <br />
            <div className='dados'>
                <img src={estevam} alt='' className='imagem' />
                <div>
                    <h1>Nome: Luis Estevam Rosa Chaves</h1>
                    <h1>Curso: ES</h1>
                    <h1>Universidade: UFC</h1>
                </div>
            </div>
            <br />


        </div>
    );
};

class ClassMeusDados extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='dados'>
                    <img src={kairo} alt='' className='imagem' />
                    <div>
                        <h1>Nome: Kairo Matheus Sales Barbosa</h1>
                        <h1>Curso: ES</h1>
                        <h1>Universidade: UFC</h1>
                    </div>
                </div>
                <br />
                <div className='dados'>
                    <img src={estevam} alt='' className='imagem' />
                    <div>
                        <h1>Nome: Luis Estevam Rosa Chaves</h1>
                        <h1>Curso: ES</h1>
                        <h1>Universidade: UFC</h1>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}

export { FuncaoMeusDados, SemReturnMeusDados, ComReturnMeusDados, ClassMeusDados };
