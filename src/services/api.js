const getDataApi = (inputHouse) => {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${inputHouse}`)
      .then((response) => response.json())
      .then((data) => {
        const dataCharacters = data.map((eachCharacter) => {
          return {
            id: eachCharacter.id,
            name: eachCharacter.name,
            species: eachCharacter.species,
            house: eachCharacter.house,
            image: eachCharacter.image ||
            `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`,
            patronus: eachCharacter.patronus,
            alive: eachCharacter.alive,
            gender: eachCharacter.gender,
          };
        });
        return dataCharacters;
      });
  };
  export default getDataApi;
  