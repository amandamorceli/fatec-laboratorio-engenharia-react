import { useState } from "react";

let nextId = 3;

const initalList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];

export default function List4() {
  const [list, setList] = useState(initalList);

  function handleClick() {
    const nextList = [...list];
    nextList.reverse();
    setList(nextList);
  }

  return (
    <>
      <button onClick={handleClick}>Reverse</button>

      <ul>
        {list.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </>
  );
}
