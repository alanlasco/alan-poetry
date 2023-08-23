import {useState}  from 'react';
import '../stylesheets/Navbar.css';
import {Link
} from "react-router-dom";
const Navbar = () =>{
    const [active, setActive]= useState('nav-menu');
    const[toggleIcon, setToggleIcon]= useState('toggler');


    const navToggle =()=>{
        active === 'nav-menu' 
        ? setActive('nav-menu nav-active') 
        : setActive('nav-menu');

        /**/ 
        toggleIcon === 'toggler' 
        ? setToggleIcon('toggler toggle')
        : setToggleIcon('toggler'); 
       }

    return(
        <nav className='nav'>
            <a href="" className="brand">ALAN<span className='brand-2'>Poetry.</span></a>

            <ul className={active}>
                <li className="nav-item"><Link to="/">Inicio</Link></li>
                <li className="nav-item"><Link to="/poemario">Poemario</Link></li>
                <li className="nav-item"><Link to="/sobremi">Sobre Mi</Link></li>
                <li className="nav-item"><Link to="/contacto">Contacto</Link></li>

            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    );


}

export default Navbar; 