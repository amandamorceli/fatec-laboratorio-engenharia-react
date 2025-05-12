function AtualizarRelogio() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let seg = new Date().getSeconds();

  const elementoRoot = document.getElementById("relogio");
  if (elementoRoot) {
    elementoRoot.innerHTML = `Agora são: ${hr}:${min}:${seg}`;
  }
}

setInterval(AtualizarRelogio, 1000);

function Relogio() {
  return (
    <div>
      <h2 id="relogio"></h2>
    </div>
  );
}

export default Relogio;
