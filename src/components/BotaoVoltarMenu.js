import { Link } from "react-router-dom";

function BotaoVoltar() {
  return (
    <div className="m-4" title="Retornar ao menu de atividades">
      <Link
        className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white"
        to="/"
      >
        <i className="fa-solid fa-arrow-left"></i> Voltar
      </Link>
    </div>
  );
}

export default BotaoVoltar;
