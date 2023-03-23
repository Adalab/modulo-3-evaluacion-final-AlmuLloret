function FilterAlive({handleInputAlive, inputStatus}) {
  const handleAlive = (ev) => {
     handleInputAlive(ev.target.value);
     console.log(ev.target.value); 
  }

  return (
      <label htmlFor="isAlive" > ¿Está vivo? 
          <select name="isAlive" id="isAlive" onChange={handleAlive} value={inputStatus} >
            <option value="all">Todos</option>
            <option value="vivo">Vivo</option>
            <option value="muerto">Muerto</option>
         </select>
        </label>
    );
  }

export default FilterAlive;
  