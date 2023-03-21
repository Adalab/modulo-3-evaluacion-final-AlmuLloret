function FilterName({handleInputName, inputName}) {

    const handleName = (ev) => {
        handleInputName(ev.target.value);
    }
    
  
    return (
        <label htmlFor="name" > Name 
            <input onInput={handleName} value={inputName} type="text" placeholder="Escribe el nombre" name="name" id="name" />
        </label>
    );
  }
  export default FilterName;
  