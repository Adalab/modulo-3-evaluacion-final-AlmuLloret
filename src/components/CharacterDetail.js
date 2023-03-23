import "../styles/Character.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gryffindor from "../images/Gryffindor.jpg";
import Slytherin from "../images/Slytherin.jpg";
import Hufflepuff from "../images/Hufflepuff.jpg";
import Ravenclaw from "../images/Ravenclaw.jpg";
import Error404 from "./Error404";

function Character({ characterSelected }) {
  if (characterSelected !== undefined) {
    const genderHtml =
      characterSelected.gender === "male" ? "Masculino" : "Femenino";
    const aliveHtml =
      characterSelected.alive === true ? (
        <>
          Vivo <FontAwesomeIcon icon="fa-regular fa-heart" />{" "}
        </>
      ) : (
        <>
          Muerto <FontAwesomeIcon icon="fa-solid fa-heart-crack" />{" "}
        </>
      );

    const patronusHtml =
      characterSelected.patronus === ""
        ? ""
        : `Patronus: ${characterSelected.patronus}`;

    const getHouse = () => {
      if (characterSelected.house === "Gryffindor") {
        return Gryffindor;
      }
      if (characterSelected.house === "Ravenclaw") {
        return Ravenclaw;
      }
      if (characterSelected.house === "Slytherin") {
        return Slytherin;
      }
      if (characterSelected.house === "Hufflepuff") {
        return Hufflepuff;
      }
    };

    return (
      <article>
        <Link to={"/"}>Volver</Link>
        <div className="detail__card">
          <img
            className="card__img"
            src={characterSelected.image}
            alt="Pic"
            title="Pic"
          ></img>
          <section className="detail__info">
            <h3 className="card__name">{characterSelected.name}</h3>
            <p className="card__text">Estatus: {aliveHtml}</p>
            <p className="card__text">Especie: {characterSelected.species}</p>
            <p className="card__text">Género: {genderHtml}</p>
            <p className="card__text">Casa: {characterSelected.house}</p>
            <p className="card__text">{patronusHtml}</p>
            <img
              className="card__crest"
              src={getHouse()}
              alt="Pic"
              title="Pic"
            ></img>
          </section>
        </div>
      </article>
    );
  } else {
    return (
      <article>
        <Error404 />
      </article>
    );
  }
}

export default Character;
