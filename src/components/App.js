/* SECCIÓN DE IMPORT */

import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import Filters from './Filters';
import { Route, Routes, useMatch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail'; 
import Error404 from "./Error404";

// - De React
// - Nuestros
// - Sass
import '../styles/App.scss';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {

  /* VARIABLES ESTADO (DATOS) */
 
  const [allChar , setAllChar] = useState ([]); 
  const [inputName, setInputName] = useState (''); 
  const [inputHouse, setInputHouse] = useState ('Gryffindor')
  //const [inputSpecie, setInputSpecie] = useState('');

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
  
  // const { pathname } = useLocation();
  // const dataUrl = matchPath('/character/:id', pathname);
  // const characterId = dataUrl !== null ? dataUrl.params.id : null;
  // const characterFind = renderCharacters().find(
  //   (eachCharacter) => eachCharacter.id ===  characterId
  // );
  
  const routeCharacterData = useMatch('/Character/:id');

  const getRouteCharacter = () => {
    if (routeCharacterData) {
      const routeCharacterId = routeCharacterData.params.id;
      const routeCharacter = allChar.find(Character => {
        return Character.id === routeCharacterId;
      });
      console.log(routeCharacter);
      return routeCharacter || [];
    }
  };
  
  /* HTML */
  return(
  <div className="container">
    <h1>Harry Potter</h1>
    <main>
      <Routes>
        <Route 
          path='/'
          element = {
            <>
              <Filters 
              inputName={inputName}
              handleInputName={handleInputName}
              handleInputHouse={handleInputHouse}
              inputHouse={inputHouse} />
              <CharacterList allChar={renderCharacters()}
              inputName={inputName} />
            </>
          }
        ></Route>
        
        <Route
            path="/character/:id"
            element={<CharacterDetail character={getRouteCharacter()}/>}
        />
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
    </main>
  </div>
  ); 
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;

