import React from "react";
import ColorTheme from "./MyColorContext";
import ClassB from "./ClassB";

const cores = { bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue" };

class ClassA extends React.Component {
  render() {
    return (
      <ColorTheme.Provider value={cores}>
        <ClassB />
      </ColorTheme.Provider>
    );
  }
}

export default ClassA;
