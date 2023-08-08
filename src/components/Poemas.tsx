import {useState} from 'react'
import { usePoemas } from '../hooks/usePoemas';
import { reqPoema } from '../interfaces/reqPoema';
import '../stylesheets/Poema.css';


export const Poemas = () => {
  const { poemas } = usePoemas();
  const [showFullText, setShowFullText] = useState<boolean>(false);

  const togglePoema = () => {
    setShowFullText(!showFullText);
  };

  const renderPoemas = (poema: reqPoema) => {
    let fulltext= poema.poema;
    let partialtext = poema.poema.slice(0, 150);
    const currentPoema = showFullText ? fulltext : partialtext+'...';
    const poemaFormatted = currentPoema.replace(/\n/g, "<br>")
    return (
      <div className='poemas-container' key={poema.id_poema}>
        <h4 className='titulo'>{poema.nombre}</h4>
        <br />
        <p style={{whiteSpace: 'pre-line'}} className='poema toggled'>{currentPoema}</p>
        <p className='fecha'>{poema.fecha}</p>
        <button onClick={togglePoema}>
          {showFullText ? 'Leer menos' : 'Leer más'}
        </button>
      </div>
    );
  };

  return (
    <>
      {poemas.map(renderPoemas)}
    </>
  );
};