import BotaoVoltar from "../BotaoVoltarMenu";
import Relogio from "./Relogio";
import Letreiro from "./Letreiro";

function Semana01() {
  return (
    <div>
      <div>
        <BotaoVoltar />
      </div>
      <div className="flex flex-col items-center p-3 gap-y-3">
        <div>
          <Relogio />
        </div>
        <div>
          <Letreiro />
        </div>
      </div>
    </div>
  );
}

export default Semana01;
