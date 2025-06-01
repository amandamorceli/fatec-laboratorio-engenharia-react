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
    <div className="m-4">
      <BotaoVoltar />
      <Galeria />
      <Avatar />
      <Profile />
      <ToDoList />
      <PackingList />
      <List />
      <PrepareMode />
      <TeaSet />
    </div>
  );
}

export default Semana03;
