export default function Place(obj) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={obj.image.src} alt={obj.image.alt} />
        <h3>{obj.title}</h3>
      </button>
    </li>
  );
}
