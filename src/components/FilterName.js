function FilterName({ handleInputName, inputName }) {
  const handleName = (ev) => {
    handleInputName(ev.target.value);
  };
  return (
    <label htmlFor="name">
      {" "}
      Busca tu personaje
      <input
        onInput={handleName}
        value={inputName}
        type="text"
        placeholder="Ej: Harry..."
        name="name"
        id="name"
        className="input"
      />
    </label>
  );
}
export default FilterName;
