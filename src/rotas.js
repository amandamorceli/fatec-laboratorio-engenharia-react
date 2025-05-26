import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Semana01 from "./Semana01";
import Semana02 from "./Semana02";
import Semana03 from "./Semana03";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Semana01" element={<Semana01 />} />
        <Route path="/Semana02" element={<Semana02 />} />
        <Route path="/Semana03" element={<Semana03 />} />
      </Routes>
    </BrowserRouter>
  );
}
