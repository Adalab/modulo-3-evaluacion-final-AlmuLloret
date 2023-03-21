import Character from "./Character";

function CharacterList({allChar}) {
  const listHtml = allChar.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  return (
    <section >
      <ul >{listHtml}</ul>
    </section>
  );
}
export default CharacterList;
