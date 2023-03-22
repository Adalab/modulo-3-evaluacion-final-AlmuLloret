import Character from "./Character";

function CharacterList({allChar, inputName}) {
  let errorMsg; 
  allChar.length!==0  ? errorMsg= '' : errorMsg= `Disculpa, no encontramos a ${inputName}. ¡Busca en otra casa!`;  
  const listHtml = allChar.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;

  });
  return (
        <section >
      <p>{errorMsg}</p>
      <ul >{listHtml}</ul>
      
    </section>
  );
}
export default CharacterList;
