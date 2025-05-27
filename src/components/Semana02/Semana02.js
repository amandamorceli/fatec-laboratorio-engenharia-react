import { Link } from "react-router-dom";
import Contador from "./Contador";

function Semana02() {
  return (
    <div>
      <h1 title="Clique para voltar">
        <Link to="/">Semana 2</Link>
      </h1>
      <Contador />
    </div>
  );
}

export default Semana02;
