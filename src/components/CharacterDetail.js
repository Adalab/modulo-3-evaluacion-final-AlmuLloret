import '../styles/Character.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Character({character }) {

   const genderHtml = character.gender === "male" ? "Masculino": "Femenino" ; 
   const aliveHtml = character.alive === true ? <>Vivo <FontAwesomeIcon icon="fa-regular fa-heart" /> </>:  <>Muerto <FontAwesomeIcon icon="fa-solid fa-heart-crack" /> </>; 

   const patronusHtml = character.patronus === "" ? "": `Patronus: ${character.patronus}`; 

    return (
      <article>
      <Link className='characterDetail' to={"/"}>Volver</Link>
        <div>
            <img
              className="card__img"
              src={character.image}
              alt="Pic"
              title="Pic"
            ></img>
            <section>
            <h3 className="card__name">
              {character.name}
            </h3>
            <p className="card__text">
              Estatus: {aliveHtml}
            </p>
            <p className="card__text">
              Especie: {character.species}
            </p>
            <p className="card__text">
              Género: {genderHtml}
            </p>
            <p className="card__text">
              Casa: {character.house}
            </p>
            <p className="card__text">
            {patronusHtml}
            </p>
            </section>
        </div>
      </article>
    );
  }
  
  export default Character;