export default function Somar({ onClick }) {
  return (
    <button onClick={onClick} className="border rounded-xl p-2 m-1">
      <i className="fas fa-plus"></i>
    </button>
  );
}
