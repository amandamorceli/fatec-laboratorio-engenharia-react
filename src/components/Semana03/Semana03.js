import { Link } from "react-router-dom";
import Galeria from "./Galeria.js";
import Avatar from "./Avatar.js";
import ToDoList from "./ToDoList.js";
import Profile from "./Profile.js";
import TeaSet from "./Cha.js";
import PackingList from "./PackingList.js";
import PrepareMode from "./Recipe.js";
import List from "./List.js";
function Semana03() {
  return (
    <div>
      <h1 title="Clique para voltar">
        <Link to="/">Semana 3</Link>
      </h1>
      <Galeria />
      <Avatar />
      <ToDoList />
      <Profile />
      <PackingList />
      <List />
      <PrepareMode />
      <TeaSet />
    </div>
  );
}

export default Semana03;
