export default function Avatar() {
  const avatar =
    "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/fei-fei-li.jpg?w=849&h=477&crop=0";
  const description = 'Fei-Fei Li, "madrinha da IA"';
  const titulo = 'Fei-Fei Li, "madrinha da IA"';
  return (
    <>
      <h3 className="text-xl font-bold">Avatar</h3>
      <img
        src={avatar}
        alt={description}
        title={titulo}
        className="rounded-2xl w-[140px] h-[200px]"
      />
    </>
  );
}
