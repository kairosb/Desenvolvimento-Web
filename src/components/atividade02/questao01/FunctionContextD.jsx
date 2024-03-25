import React from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextD = () => {
  return (
    <ColorTheme.Consumer>
      {(cores) => (
        <div>
          <h1 style={{ backgroundColor: cores.bkgD }}>Contexto D</h1>
        </div>
      )}
    </ColorTheme.Consumer>
  );
};

export default FunctionContextD;
