import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
import { useState } from "react";

function App() {
  function showTheAnswer(e) {
    e.target.parentElement.childNodes[1].classList.toggle("show");
  }

  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div className="questionHolder" key={item.question}>
            <h4 onClick={(e) => showTheAnswer(e)}>{item.question}</h4>
            <p className="paragraph">{item.answer}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
