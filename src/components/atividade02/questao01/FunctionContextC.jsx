import React from "react";
import ColorTheme from "./MyColorContext";
import FunctionContextD from "./FunctionContextD";

const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {(cores) => (
                <div>
                    <h1 style={{ backgroundColor: cores.bkgC }}>Contexto C</h1>
                    <FunctionContextD />
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextC;
