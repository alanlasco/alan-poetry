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
    return `${poemaStates[poemaId] ? '' : 'toggled'}`;
  };

  const renderPoemas = (poema: reqPoema) => {
    
    const isExpanded = poemaStates[poema.id_poema] || false;
    const truncatedText = poema.poema.slice(0, 150);
    const currentPoema = isExpanded ? poema.poema : truncatedText + '...';

    return (
      <>
      <div className={getPoemaClass(poema.id_poema)}>
      <div className='poemas-container 'key={poema.id_poema}>
        <h4 className='titulo'>{poema.nombre}</h4>
        <br />
        <p style={{ whiteSpace: 'pre-line' }} className='poema'>{currentPoema}</p>
        <p className='fecha'>{poema.fecha}</p>
        <div className='btn-toggle' onClick={() => togglePoema(poema.id_poema)}>
          {isExpanded ? 'Leer menos' : 'Leer más'}
        </div>
      </div>
      </div>
      <br /><br />
      </>
    );
  };

  return (
    <>
      {poemas.map(renderPoemas)}
    </>
  );
};
// En este código, hemos creado un estado poemaStates utilizando el estado de useState.Este estado es un objeto d





