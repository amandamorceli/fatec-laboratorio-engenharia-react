import { Link } from "react-router-dom";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";

function Semana01() {
  return (
    <div>
      <h1 title="Clique para voltar">
        <Link to="/">Semana 1</Link>
      </h1>
      <Relogio />
      <Letreiro />
    </div>
  );
}

export default Semana01;
