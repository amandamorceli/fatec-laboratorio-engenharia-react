function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className="border-2 border-gray-400 p-2 rounded-xl"
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div>
      <h1 className="mx-4 text-xl">Toolbar</h1>

      <div
        className="px-4 py-2 border-2 border-blue-300 bg-blue-200 flex gap-x-2"
        title="Toolbar"
        onClick={() => {
          alert("You clicked on the toolbar!");
        }}
      >
        <Button onClick={() => alert("Playing!")}>Play movie</Button>

        <Button onClick={() => alert("Uploading!")}>Upload image</Button>
      </div>
    </div>
  );
}
