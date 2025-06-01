export default function Relogio() {
  return (
    <div>
      <h2 className="text-xl" id="relogio"></h2>
    </div>
  );
}
function AtualizarRelogio() {
  let hr = new Date().getHours();
  let min = new Date().getMinutes();
  let seg = new Date().getSeconds();

  const elementoRoot = document.getElementById("relogio");
  if (elementoRoot) {
    elementoRoot.innerHTML = `${hr}:${min}:${seg}`;
  }
}

setInterval(AtualizarRelogio, 1000);
