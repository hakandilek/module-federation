import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const App = () => (
  <div>
    <div>Name: cart</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
