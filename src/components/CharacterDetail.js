import '../styles/Character.scss';
function Character({characterFind}) {

   // characterFind.alive === true ? Viva : Muerta ; 
   const genderHtml = characterFind.gender === "male" ? "Masculino": "Femenino" ; 
   const aliveHtml = characterFind.alive === true ? "Vive": "Muerto"; 
   const patronusHtml = characterFind.patronus === "" ? "": `Patronus: ${characterFind.patronus}`; 

    return (
      <div>
         <a href=".">
          <img
            className="card__img"
            src={characterFind.image}
            alt="Pic"
            title="Pic"
          ></img>
          <section>
          <h3 className="card__name">
            {characterFind.name}
          </h3>
          <p className="card__text">
            Estatus: {aliveHtml}
          </p>
          <p className="card__text">
            Especie: {characterFind.species}
          </p>
          <p className="card__text">
            Género: {genderHtml}
          </p>
          <p className="card__text">
            Casa: {characterFind.house}
          </p>
          <p className="card__text">
           {patronusHtml}
          </p>
          </section>
          </a>
      </div>
    );
  }
  export default Character;