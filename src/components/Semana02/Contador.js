import { useState } from "react";

function Soma({ onClick }) {
  return (
    <button onClick={onClick} className="border p-1">
      <i className="fas fa-plus"></i>
    </button>
  );
}

function Subtrai({ onClick }) {
  return (
    <button onClick={onClick} className="border p-1">
      <i className="fas fa-minus"></i>
    </button>
  );
}

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
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-6">Contador</h1>
      <p className="text-2xl font-semibold mb-10">TOTAL {total}</p>
      <div className="flex gap-10">
        <div>
          HOMEM {homem}
          <div>
            <Soma onClick={SomarH} />
            <Subtrai onClick={SubtrairH} />
          </div>
        </div>
        <div>
          MULHER {mulher}
          <div>
            <Soma onClick={SomarM} />
            <Subtrai onClick={SubtrairM} />
          </div>
        </div>
      </div>
    </div>
  );
}
