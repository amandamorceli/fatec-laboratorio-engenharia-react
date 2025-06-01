import { useState } from "react";
import BotaoSoma from "./BotaoSomar";
import BotaoSubtrai from "./BotaoSubtrair";
import avatarM from "./avatarM.png";
import avatarH from "./avatarH.png";

export default function Contador() {
  const [homem, setHomem] = useState(0);
  const [mulher, setMulher] = useState(0);
  const total = homem + mulher;

  function SomarH() {
    setHomem(homem + 1);
  }
  function SubtrairH() {
    if (homem > 0) {
      setHomem(homem - 1);
    }
  }
  function SomarM() {
    setMulher(mulher + 1);
  }
  function SubtrairM() {
    if (mulher > 0) {
      setMulher(mulher - 1);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-8">
      <h1 className="text-4xl font-bold">Contador</h1>
      <p className="text-2xl font-semibold">TOTAL {total}</p>
      <div className="flex gap-10">
        <div className="flex flex-col gap-1">
          <img src={avatarH} alt="Avatar Homem" className="w-[100px]" />
          HOMEM {homem}
          <div>
            <BotaoSoma onClick={SomarH} />
            <BotaoSubtrai onClick={SubtrairH} />
          </div>
        </div>
        <div>
          <img src={avatarM} alt="Avatar Mulher" className="w-[100px]" />
          MULHER {mulher}
          <div>
            <BotaoSoma onClick={SomarM} />
            <BotaoSubtrai onClick={SubtrairM} />
          </div>
        </div>
      </div>
    </div>
  );
}
