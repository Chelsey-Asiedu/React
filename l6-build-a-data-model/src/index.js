import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";
import { names } from "./data";

const renderNameTag = (name) => <NameTag name={name.person} key={name.id} />;
const App = () => {
  const NameTagElements = names.map(renderNameTag);
  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
