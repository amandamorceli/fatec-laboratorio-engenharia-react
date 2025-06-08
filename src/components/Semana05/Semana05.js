import BotaoVoltar from "../BotaoVoltarMenu";
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "../../App";
export default function Semana05() {
  return (
    <div>
      <div>
        <BotaoVoltar />
      </div>
      <div className="flex flex-col items-center gap-y-3">
        <h1 className="text-xl font-bold">Semana 5</h1>
        <h2 className="text-lg font-semibold">City Quiz</h2>
        <FormQuiz />

        <h2 className="text-lg font-semibold">FormTicket</h2>
        <FormTicket />

        <h2 className="text-lg font-semibold">Accordion</h2>
        <Accordion />

        <h2 className="text-lg font-semibold">ContactList e Chat</h2>
        <Messenger />
      </div>
    </div>
  );
}
