import Character from "./Character";
import ErrorMsj from "./ErrorMsj";

function CharacterList({allChar, inputName}) { 
  const listHtml = allChar.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  return (
        <section className="char" >
      <ErrorMsj allChar={allChar} inputName={inputName}/>
      <ul className="char__list">{listHtml}</ul>
    </section>
  );
}
export default CharacterList;
