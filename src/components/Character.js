import '../styles/Character.scss';

function Character({eachCharacter}) {
    return (
      <li className="card">
    <a href=".">
          <img
            className="card__img"
            src={eachCharacter.image}
            alt="Pic"
            title="Pic"
          ></img>
          <h3 className="card__name">
            {eachCharacter.name}
          </h3>
          <p className="card__text">
            {eachCharacter.species}
          </p>
          </a>
      </li>
    );
  }
  export default Character;