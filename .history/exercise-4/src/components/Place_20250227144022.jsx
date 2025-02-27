export default function Place({places}) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={place.src} alt={obj.image.alt} />
        <h3>{obj.title}</h3>
      </button>
    </li>
  );
}
