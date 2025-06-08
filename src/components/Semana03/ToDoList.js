const pessoa = {
  name: "Grace Hopper",
  theme: {
    backgroundColor: "#F0FFFF",
    color: "#black",
  },
};

export default function TodoList() {
  return (
    <div
      style={pessoa.theme}
      className="flex flex-col gap-y-3 items-center my-4"
    >
      <h1 className="text-xl font-bold">Lista de feitos por {pessoa.name}</h1>
      <div className="flex gap-x-3">
        <img
          className="w-[300px] h-[200px] m-4 rounded-2xl"
          src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/grace-hopper.jpg?w=849&h=477&crop=0"
          alt="Grace Hopper"
          title="Grace Hopper"
        />
        <ul className="flex flex-col justify-evenly">
          <li>
            Grace Murray Hopper esteve presente no desenvolvimento de
            computadores e linguagens de programação entre os anos 1930 e 1980.
          </li>
          <li>
            Uma das maiores conquistas de sua carreira foi o desenvolvimento de
            linguagens de computador escritas em inglês, em vez de notação
            matemática.
          </li>
          <li>
            O legado de Hopper é homenageado pela conferência anual "Grace
            Hopper Celebration of Women in Computing".
          </li>
        </ul>
      </div>
    </div>
  );
}
