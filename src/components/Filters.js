import FilterHouse  from "./FilterHouse";
import FilterSpecie from './FilterSpecie'
import FilterName from "./FilterName";

function Filters({handleInputName, inputName, handleInputHouse}) {
  return (
    <section className="filter">
      <form>
        <FilterName 
        handleInputName={handleInputName}
        inputName={inputName}
       />
        <FilterSpecie />
        <FilterHouse  handleInputHouse={handleInputHouse}/>
      </form>
    </section>
  );
}
export default Filters;
