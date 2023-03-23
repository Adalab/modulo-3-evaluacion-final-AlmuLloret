import Gryffindor from "../images/g.jpg";
import Slytherin from "../images/s.jpg";
import Hufflepuff from "../images/h.jpg";
import Ravenclaw from "../images/r.jpg";

const getDataApi = (inputHouse) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${inputHouse}`)
    .then((response) => response.json())
    .then((data) => {
      const dataCharacters = data.map((eachCharacter) => {
        const getHouse = () => {
          if (eachCharacter.house === "Gryffindor") {
            return Gryffindor;
          }
          if (eachCharacter.house === "Ravenclaw") {
            return Ravenclaw;
          }
          if (eachCharacter.house === "Slytherin") {
            return Slytherin;
          }
          if (eachCharacter.house === "Hufflepuff") {
            return Hufflepuff;
          }
        };

        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          image: eachCharacter.image || getHouse(),
          patronus: eachCharacter.patronus,
          alive: eachCharacter.alive,
          gender: eachCharacter.gender,
        };
      });
      return dataCharacters;
    });
};
export default getDataApi;
