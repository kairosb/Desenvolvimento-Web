const style = {
    backgroundColor: '#3f3881',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '10px',
    margin: 'auto',
    width: '200px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    marginBottom: '20px'
};

export const PlacaMae = ({ nome, preco }) => {
    return (
        <div style={style}>
            <h3>Placa Mãe</h3>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </div>
    );
};

export const Memoria = ({ nome, preco }) => {

    return (
        <div style={style}>
            <h3>Memória</h3>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </div>
    );
};

export const PlacaDeVideo = ({ nome, preco }) => {

    return (
        <div style={style}>
            <h3>Placa de Vídeo</h3>
            <p>Nome: {nome}</p>
            <p>Preço: {preco}</p>
        </div>
    );
};
