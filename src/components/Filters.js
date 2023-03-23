import FilterHouse from "./FilterHouse";
import FilterSpecie from "./FilterSpecie";
import FilterName from "./FilterName";
import FilterAlive from "./FilterAlive";
import OrderByName from "./OrderByName";

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
  handleInputReset,
  handleInputOrder,
  inputOrder,
}) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleReset = () => {
    handleInputReset();
  };

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
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
        <OrderByName
          handleInputOrder={handleInputOrder}
          inputOrder={inputOrder}
        />
        <input
          onClick={handleReset}
          value="reset"
          type="button"
          name="reset"
          id="reset"
        />
      </form>
    </section>
  );
}
export default Filters;
