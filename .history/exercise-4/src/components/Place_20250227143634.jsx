export default function Place(obj) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={obj.image.src} alt="the place image alt" />
        <h3>{obj.id}</h3>
      </button>
    </li>
  );
}
