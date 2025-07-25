import { useState } from "react";

let nextId = 3;
const initalList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initalList);
  const [yourList, setYourList] = useState(initalList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  return (
    <>
      <h1 className="text-xl font-bold">Art Bucket List</h1>

      <h2>My list of art to see:</h2>

      <ItemList artworks={myList} onToggle={handleToggleMyList} />

      <h2>Your list of art to see:</h2>

      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );

  function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map((artwork) => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={(e) => {
                  onToggle(artwork.id, e.target.checked);
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }
}
