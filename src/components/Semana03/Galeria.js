export default function Galeria() {
  return (
    <section className="flex flex-col items-center gap-y-3">
      <h1 className="text-xl">Galeria</h1>
      <h2>A primeira programadora da história</h2>
      <div className="flex gap-3">
        <Perfil />
        <Perfil />
        <Perfil />
      </div>
    </section>
  );
}

function Perfil() {
  return (
    <img
      src="https://i.imgur.com/Q5zx8X1.jpeg"
      alt="Ada Lovelace"
      title="Ada Lovelace"
      className="w-24 h-24 object-cover rounded"
    />
  );
}
