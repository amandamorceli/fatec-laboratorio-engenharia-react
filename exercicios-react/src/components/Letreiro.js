let index = 0;
const textoLetreiro = "Conheça a Fatec!!!";

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
      <h2 id="letreiro"></h2>
    </div>
  );
}

export default Letreiro;
