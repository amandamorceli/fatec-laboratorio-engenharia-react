import BotaoVoltar from "../BotaoVoltarMenu";
import Galeria from "./Galeria";
import Avatar from "./Avatar";
import ToDoList from "./ToDoList";
import Profile from "./Profile";
import TeaSet from "./Cha";
import PackingList from "./PackingList";
import PrepareMode from "./Recipe";
import List from "./List";
function Semana03() {
  return (
    <div>
      <BotaoVoltar />
      <div className="flex flex-col items-center gap-y-3">
        <Galeria />
        <Avatar />
        <Profile />
        <ToDoList />
        <PackingList />
        <List />
        <PrepareMode />
        <TeaSet />
      </div>
    </div>
  );
}

export default Semana03;
