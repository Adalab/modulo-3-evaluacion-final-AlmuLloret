/* SECCIÓN DE IMPORT */

import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {

  /* VARIABLES ESTADO (DATOS) */
  //const [allCharG , setAllCharG] = useState ([]); 
  const [allChar , setAllChar] = useState ([]); 
  const [inputName, setInputName] = useState (''); 
  const [inputHouse, setInputHouse] = useState ('Gryffindor')
  const [inputSpecie, setInputSpecie] = useState('');

  /* EFECTOS (código cuando carga la página) */

  useEffect(() => {
    getDataApi(inputHouse).then((dataCharacters) => {
      console.log(dataCharacters);
      setAllChar(dataCharacters);
    });
  }, [inputHouse]);



  /* FUNCIONES HANDLER */
  
  const handleInputName = (value) => {
    setInputName(value);
  };

  const handleInputHouse = (value) => {
    setInputHouse(value);
  };

  const renderCharacters = () => {
    const filteredChar = allChar.filter ((eachChar) =>
    eachChar.name.toLowerCase().includes(inputName.toLowerCase()));
    return filteredChar; 
  }; 





  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */



  /* HTML */
  return(
  <div className="container">
    <h1>Harry Potter</h1>
    <main>
      <Filters 
      inputName={inputName}
      handleInputName={handleInputName}
      handleInputHouse={handleInputHouse}
      inputHouse={inputHouse}
      />
      <CharacterList allChar={renderCharacters()}/>
    </main>
  </div>
  ); 
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
