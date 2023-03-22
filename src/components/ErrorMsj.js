function ErrorMessaje({allChar, inputName}) {
  let errorMsg; 
  allChar.length!==0  ? errorMsg= '' : errorMsg= `Disculpa, no encontramos a ${inputName}. ¡Busca en otra casa!`;  
  return (    
      <p>{errorMsg}</p>
  );
}
export default ErrorMessaje;
