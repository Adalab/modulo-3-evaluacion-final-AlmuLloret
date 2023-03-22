import Character from "./Character";
import ErrorMsj from "./ErrorMsj";

function CharacterList({allChar, inputName}) { 
  const listHtml = allChar.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  return (
        <section >
      <ErrorMsj allChar={allChar} inputName={inputName}/>
      <ul >{listHtml}</ul>
    </section>
  );
}
export default CharacterList;
