import FilterHouse from "./FilterHouse";
import FilterSpecie from "./FilterSpecie";
import FilterName from "./FilterName";
import FilterAlive from "./FilterAlive";
import Reset from "./Reset";

function Filters({
  handleInputName,
  inputName,
  handleInputHouse,
  inputHouse,
  species,
  handleInputSpecie,
  inputSpecie,
  handleInputAlive,
  inputStatus,
  handleInputReset = { handleInputReset },
}) {
  return (
    <section>
      <form className="form">
        <FilterName handleInputName={handleInputName} inputName={inputName} />
        <FilterSpecie
          species={species}
          handleInputSpecie={handleInputSpecie}
          inputSpecie={inputSpecie}
        />
        <FilterHouse
          handleInputHouse={handleInputHouse}
          inputHouse={inputHouse}
        />
        <FilterAlive
          handleInputAlive={handleInputAlive}
          inputStatus={inputStatus}
        />
        <Reset
          chandleInputReset={handleInputReset}
          inputHouse={inputHouse}
          inputStatus={inputStatus}
          inputName={inputName}
        />
      </form>
    </section>
  );
}
export default Filters;
