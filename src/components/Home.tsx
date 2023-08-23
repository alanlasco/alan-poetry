import { useState } from 'react';
import { Poemas } from './Poemas';
import { PoemasFavoritos } from './PoemasFavoritos';
import '../stylesheets/Home.css';

function Home() {
    const [startIndex, setStartIndex] = useState<boolean>(false);

    const handleFavourite = () => {
        setStartIndex(true);
    };

    const handleTodos = () => {
        setStartIndex(false);
    };

    return (
        <>
            <ul className='nav-poemas'>
                <li>
                    <a onClick={handleTodos}>Todos </a>
                </li>
                <li>
                    <a onClick={handleFavourite}>Favoritos</a>
                </li>
            </ul>
                {startIndex ? <PoemasFavoritos /> : <Poemas />}
        </>
    );
}

export default Home;