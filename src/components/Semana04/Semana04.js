import BotaoVoltar from "../BotaoVoltarMenu";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Form from "./Form";
import MovingDot from "./MovingDot";

function Semana04() {
  return (
    <div>
      <BotaoVoltar />
      <div>
        <Toolbar />
      </div>
      <div className="flex flex-col items-start mx-4">
        <Gallery />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <MovingDot />
      </div>
    </div>
  );
}

export default Semana04;
