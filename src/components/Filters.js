import FilterHouse  from "./FilterHouse";
import FilterSpecie from './FilterSpecie'
import FilterName from "./FilterName";

function Filters({handleInputName, inputName, handleInputHouse, inputHouse,species,handleInputSpecie, inputSpecie }) {
  return (
    <section >
      <form className="form">
        <FilterName 
        handleInputName={handleInputName}
        inputName={inputName}
       />
        <FilterSpecie 
        species={species}
        handleInputSpecie={handleInputSpecie}
        inputSpecie={inputSpecie}
        />
        <FilterHouse  
        handleInputHouse={handleInputHouse}
        inputHouse={inputHouse}/>
      </form>
    </section>
  );
}
export default Filters;
