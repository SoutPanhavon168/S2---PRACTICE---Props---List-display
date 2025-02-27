export default function Place(obj) {
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src="the place image src" alt="the place image alt" />
        <h3>{obj.id}
            {obj.title}
        </h3>
      </button>
    </li>
  );
}
