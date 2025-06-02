import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Semana01 from "./components/Semana01/Semana01";
import Semana02 from "./components/Semana02/Semana02";
import Semana03 from "./components/Semana03/Semana03";
import Semana04 from "./components/Semana04/Semana04";
import Semana05 from "./components/Semana05/Semana05";
import Semana06 from "./components/Semana06/Semana06";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Semana01" element={<Semana01 />} />
        <Route path="/Semana02" element={<Semana02 />} />
        <Route path="/Semana03" element={<Semana03 />} />
        <Route path="/Semana04" element={<Semana04 />} />
        <Route path="/Semana05" element={<Semana05 />} />
        <Route path="/Semana06" element={<Semana06 />} />
      </Routes>
    </BrowserRouter>
  );
}
