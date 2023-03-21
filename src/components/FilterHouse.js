function FilterHouse({handleInputHouse}) {
  const handleHouse = (ev) => {
     handleInputHouse(ev.target.value);
  }

  return (
      <label htmlFor="house" > Pick a house 
          <select name="house" id="house" onChange={handleHouse} >
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin </option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
         </select>
        </label>
    );
  }

export default FilterHouse;
  