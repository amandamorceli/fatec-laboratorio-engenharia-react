import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3 m-14">
      <h1 className="text-2xl">Laboratório de Engenharia de Software 1/2025</h1>
      <h2>Profª ANA CAROLINA NICOLOSI DA R. GRACIOSO</h2>
      <ul className="flex flex-col gap-y-3">
        <li className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white">
          <Link to="/Semana01">Atividade 1</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white">
          <Link to="/Semana02">Atividade 2</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white">
          <Link to="/Semana03">Atividade 3</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white">
          <Link to="/Semana04">Atividade 4</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white">
          <Link to="/Semana05">Atividade 5</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-indigo-400 hover:bg-indigo-300 hover:text-black text-white">
          <Link to="/Semana06">Atividade 6</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
