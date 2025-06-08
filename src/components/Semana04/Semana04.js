import BotaoVoltar from "../BotaoVoltarMenu";
import Toolbar from "./Toolbar";
import Gallery from "./Gallery";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import ShapeEditor from "./ShapeEditor";
import Counter from "./Counter";
import List2 from "./List2";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";

function Semana04() {
  return (
    <div>
      <BotaoVoltar />
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-bold">Semana 4</h1>
      </div>
      <div>
        <Toolbar />
      </div>
      <div className="flex flex-col items-center">
        <Gallery />
        <Counter />
        <Form />
        <MovingDot />
        <Form2 />
        <Form3 />
        <List />
        <List2 />
        <ShapeEditor />
        <CounterList />
        <List3 />
        <List4 />
        <BucketList />
      </div>
    </div>
  );
}

export default Semana04;
