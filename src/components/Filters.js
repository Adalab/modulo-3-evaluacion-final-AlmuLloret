import FilterHouse from "./FilterHouse";
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
    <section className="search">
      <h1 className="search__h1">Bienvenido a Hogwarts</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <FilterName handleInputName={handleInputName} inputName={inputName} />
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
          className="reset"
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
