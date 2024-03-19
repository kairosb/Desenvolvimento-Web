import Filho from './01Filho';

const style = {
    backgroundColor: '#009f45',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
    margin: 'auto',
    width: 'fit-content',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
};

const Pai = () => {
    return (
        <div style={style}>
            <h3>Componente Pai chamando componente filho para calcular IMC</h3>
            <Filho altura={1.8} peso={90} />
        </div>
    );
};

export default Pai;
