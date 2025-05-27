export default function Avatar() {
  const avatar = "https://i.imgur.com/Q5zx8X1.jpeg";
  const description = "Ada Lovelace";
  return (
    <>
      <h3>Avatar</h3>
      <img src={avatar} alt={description} />
    </>
  );
}
