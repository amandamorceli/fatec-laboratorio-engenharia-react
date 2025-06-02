import BotaoVoltar from "../BotaoVoltarMenu";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import ShapeEditor from "./ShapeEditor";

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
      <div>
        <Form2/>
      </div>
      <div>
        <Form3/>
      </div>
      <div>
        <List/>
      </div>
      <div><ShapeEditor/></div>
    </div>
  );
}

export default Semana04;
