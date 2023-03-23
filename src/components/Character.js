import "../styles/Character.scss";
import { Link } from "react-router-dom";

function Character({ eachCharacter }) {
  return (
    <Link className="item" to={`/character/${eachCharacter.id}`}>
      <li className="card">
        <img
          className="card__img"
          src={eachCharacter.image}
          alt="Pic"
          title="Pic"
        ></img>
        <h3 className="card__name">{eachCharacter.name}</h3>
        <p className="card__text">{eachCharacter.species}</p>
      </li>
    </Link>
  );
}

export default Character;
