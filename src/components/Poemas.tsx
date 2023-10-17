
import { useState } from 'react'
import { usePoemas } from '../hooks/usePoemas';
import { reqPoema } from '../interfaces/reqPoema';
import '../stylesheets/Poema.css';

export const Poemas = () => {
  const { poemas } = usePoemas();

  // Creamos un objeto para almacenar el estado de cada poema individualmente
  const [poemaStates, setPoemaStates] = useState<{ [key: number]: boolean }>({});
  const togglePoema = (poemaId: number) => {
    setPoemaStates(prevState => ({
      ...prevState,
      [poemaId]: !prevState[poemaId]
    }));
  };
  

  const getPoemaClass = (poemaId: number) => {
    return `${poemaStates[poemaId] ? 'btn-toggle-poema' : 'btn-toggled-poema'}`;
  };
  const getPoemaClassFecha = (poemaId: number) => {
    return `${poemaStates[poemaId] ? 'fecha' : 'fecha-none'}`;
  };
  const getPoemaClassBlurred = (poemaId: number) => {
    return `${poemaStates[poemaId] ? 'poema' : 'poema-blurred'}`;
  };
  const containerExpanded = (poemaId: number) => {
    return `${poemaStates[poemaId] ? '' : 'container-expanded'}`;
  };  
  
/*********/
  // const [isHiddenTextVisible, setIsHiddenTextVisible] = useState(false);

  // const toggleText = () => {
  //   setIsHiddenTextVisible(!isHiddenTextVisible);
  // };

  const renderPoemas = (poema: reqPoema) => {
    
    const isExpanded = poemaStates[poema.id_poema] || false;
    const truncatedText = poema.poema.slice(0, 150);
    const currentPoema = isExpanded ? poema.poema : truncatedText + '...';
    
    
  return (
    <div className='todosAnimation' key={poema.id_poema}>
    <div key={poema.id_poema} className={`poemas-container ${containerExpanded}`}>
      <h4 className='titulo'>{poema.nombre}</h4>
        <br />
        <p className='separador'></p>
        <br />
<p
    key={`poema-${poema.id_poema}`}
    style={{ whiteSpace: 'pre-line' }}
    className={`${
        getPoemaClassBlurred(poema.id_poema)} ${
        poemaStates[poema.id_poema] ? 'poema-expanded' : ''
    }`}
>
    {currentPoema}
</p>
      <p key={`fecha-${poema.id_poema}`} className={getPoemaClassFecha(poema.id_poema)}>
        {poema.fecha}
      </p>
      <button
        key={`button-${poema.id_poema}`}
        className={getPoemaClass(poema.id_poema)}
        onClick={() => togglePoema(poema.id_poema)}
      >
        {isExpanded ? 'Leer menos' : 'Leer más'}
      </button>
    </div>
    <br /><br />
    </div>
  );

  };

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNextClick = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePreviousClick = () => {
    setStartIndex(startIndex - itemsPerPage);
  };

  const currentPoemas = poemas.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {currentPoemas.map(renderPoemas)}
    <div>
        <button className='button_slide slide_down' onClick={handlePreviousClick} disabled={startIndex === 0}>
        {'<< Anterior'}
      </button>
      <button className='button_slide slide_down' onClick={handleNextClick} disabled={startIndex + itemsPerPage >= poemas.length}>
        {'Siguiente >>'}
      </button>
      </div>
    </>
  );
};


// En este código, hemos creado un estado poemaStates utilizando el estado de useState.Este estado es un objeto d


// En este ejemplo, he reorganizado el código para usar el estado startIndex para rastrear qué grupo de poemas se debe mostrar.Cuando haces clic en el botón "Siguiente", se actualiza startIndex, lo que a su vez actualiza los poemas que se renderizan en ese momento.





