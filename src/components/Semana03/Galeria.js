function Profile() {
  return (
    <img
      src="https://i.imgur.com/Q5zx8X1.jpeg"
      alt="Ada Lovelace"
      className="w-24 h-24 object-cover rounded"
    />
  );
}

export default function Galeria() {
  return (
    <section>
      <h1>Galeria - A primeira programadora da história</h1>
      <div className="flex gap-3">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
