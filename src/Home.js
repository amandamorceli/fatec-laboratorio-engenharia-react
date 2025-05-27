import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-y-3">
      <h1 className="text-2xl">
        Laboratório de Engenharia de Software - Profª ANA CAROLINA NICOLOSI DA
        R. GRACIOSO
      </h1>
      <ul className="flex flex-col gap-y-3">
        <li className="px-6 py-3 rounded-2xl shadow bg-rose-400 hover:bg-rose-300 hover:text-black text-white">
          <Link to="/Semana01">Semana 1</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-rose-400 hover:bg-rose-300 hover:text-black text-white">
          <Link to="/Semana02">Semana 2</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-rose-400 hover:bg-rose-300 hover:text-black text-white">
          <Link to="/Semana03">Semana 3</Link>
        </li>
        <li className="px-6 py-3 rounded-2xl shadow bg-rose-400 hover:bg-rose-300 hover:text-black text-white">
          <Link to="/Semana04">Semana 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
