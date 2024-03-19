
import Gon from './Gon.webp'
import Hisoka from './Hisoka.webp'

const styleWorld = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}


const Hero = (props) => {
    return (
        <div style={{ textAlign: "center", paddingRight: "50px" }}>
            <h2>{props.name}</h2>
            <img src={props.img} alt="Hero" style={{ width: "150px" }} />
        </div>
    );
};

const Enemy = (props) => {
    return (
        <div style={{ textAlign: "center", paddingLeft: "50px" }}>
            <h2>{props.name}</h2>
            <img src={props.img} alt="Enemy" style={{ width: "150px" }} />
        </div>
    );
};

export const Arena = () => {
    return (
        <div style={{ display: "flex" }}>
            <Hero name="Gon" img={Gon} />
            <h1>X</h1>
            <Enemy name="Hisoka" img={Hisoka} />
        </div>
    );
};

export const World = (props) => {
    return (
        <div style={styleWorld}>
            {props.children}
        </div>
    );
};
