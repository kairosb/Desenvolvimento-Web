import React from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextB = () => {
    return (
        <ColorTheme.Consumer>
            {(cores) => (
                <div>
                    <h1 style={{ backgroundColor: cores.bkgB }}>Contexto B</h1>
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextB;
