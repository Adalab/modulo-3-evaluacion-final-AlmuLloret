function FilterHouse({ handleInputHouse, inputHouse }) {
  const handleHouse = (ev) => {
    handleInputHouse(ev.target.value);
  };

  return (
    <label htmlFor="house">
      {" "}
      Selecciona la casa
      <select
        name="house"
        id="house"
        onChange={handleHouse}
        value={inputHouse}
        className="input"
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin </option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </label>
  );
}

export default FilterHouse;
