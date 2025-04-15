import "./App.css";

function Letreiro() {
  const textoLetreiro = "Venha estudar na Fatec!!!";
  let index = 0;

  function ExibirLetreiro() {
    return (
      <div className="App">
        <div>
          <h1>{textoLetreiro.slice(0, index)}</h1>
        </div>
      </div>
    );
  }

  index++;
  if (index > textoLetreiro.length) {
    index = 0;
  }
  setInterval(ExibirLetreiro, 200);
}

export default Letreiro;
