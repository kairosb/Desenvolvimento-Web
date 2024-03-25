import React from "react";
import ColorTheme from "./MyColorContext";
import FunctionContextB from "./FunctionContextB";
import FunctionContextC from "./FunctionContextC";

const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };

const FunctionContextA = () => {
  return (
    <ColorTheme.Provider value={cores}>
      <FunctionContextB />
      <FunctionContextC />
    </ColorTheme.Provider>
  );
};

export default FunctionContextA;
