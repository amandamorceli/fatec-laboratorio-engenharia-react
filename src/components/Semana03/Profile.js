import { getImageUrl } from "../utils";

function Avatar({ person, size }) {
  return (
    <img
      className="rounded-2xl"
      src={getImageUrl(person)}
      alt={person.name}
      title={person.name}
      width={200}
      height={200}
    />
  );
}

export default function Perfil() {
  return (
    <>
      <h3>Perfil</h3>
      <div className="flex flex-col gap-y-3 ">
        <Avatar person={{ name: "Hedy Lamarr", imageId: "hedy-lamarr" }} />
        <Avatar person={{ name: "Mary Jackson", imageId: "mary-jackson" }} />
      </div>
    </>
  );
}
