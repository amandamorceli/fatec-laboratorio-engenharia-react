function Relogio() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let seg = new Date().getSeconds();

  const elementoRoot = document.getElementById("relogio");
  if (elementoRoot) {
    elementoRoot.innerHTML = `${hr}:${min}:${seg}`;
  }
}

setInterval(Relogio, 1000);

function MostrarRelogio() {
  return (
    <div>
      <h1 id="relogio"></h1>
    </div>
  );
}

export default MostrarRelogio;
