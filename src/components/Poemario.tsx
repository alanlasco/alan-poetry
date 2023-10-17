import { useState } from 'react';
import { Poemas } from './Poemas';
import { PoemasFavoritos } from './PoemasFavoritos';
import '../stylesheets/Poemario.css';
import { motion } from 'framer-motion';

function Poemario() {
    const [startIndex, setStartIndex] = useState<boolean>(false);

    const handleFavourite = () => {
        setStartIndex(true);
    };

    const handleTodos = () => {
        setStartIndex(false);
    };

    return (
        <motion.div>
            <div className='contenedor-poemas'>
            <ul className='nav-poemas'>
                <li className='todos'>
                    <a onClick={handleTodos}>Todos </a>
                </li>
                <p className='separador-vertical'></p>
                <li className='favoritos'>
                    <a onClick={handleFavourite}>Favoritos</a>
                </li>
            </ul>
            <br /><br />
                <div className='poemas-contenedor'>
                {startIndex ? <PoemasFavoritos /> : <Poemas />}
                </div>
            </div>    
        </motion.div>
    );
}

export default Poemario;