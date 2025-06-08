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
      <h3 className="text-xl font-bold">Perfil</h3>
      <div className="flex flex-col gap-y-3 ">
        <Avatar
          size={100}
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        />
        <Avatar
          size={100}
          person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }}
        />
        <Avatar
          size={100}
          person={{ name: "Lin Lanying", imageId: "1bX5QH6" }}
        />
      </div>
    </>
  );
}
