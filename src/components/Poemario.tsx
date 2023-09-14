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
            <ul className='nav-poemas'>
                <li>
                    <a onClick={handleTodos}>Todos </a>
                </li>
                <li>
                    <a onClick={handleFavourite}>Favoritos</a>
                </li>
            </ul>
                {startIndex ? <PoemasFavoritos /> : <Poemas />}
        </motion.div>
    );
}

export default Poemario;