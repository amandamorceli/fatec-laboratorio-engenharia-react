import React from "react";
import "./App.css";

let index = 0;
const textoLetreiro = "Venha estudar na Fatec!!!";

function AtualizarLetreiro() {
  index++;
  if (index > textoLetreiro.length) {
    index = 0;
  }

  const elementoRoot = document.getElementById("letreiro");
  if (elementoRoot) {
    elementoRoot.innerHTML = textoLetreiro.slice(0, index);
  }
}

setInterval(AtualizarLetreiro, 200);

function Letreiro() {
  return (
    <div>
      <h1 id="letreiro"></h1>
    </div>
  );
}

export default Letreiro;
