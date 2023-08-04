import {useState}  from 'react';
import '../stylesheets/Navbar.css';

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
            <a href="" className="brand">ALAN<a href="" className='brand-2'>Poetry.</a></a>

            <ul className={active}>
                <li className="nav-item"><a href="">Home</a></li>
                <li className="nav-item"><a href="">Index</a></li>
                <li className="nav-item"><a href="">About us</a></li>
                <li className="nav-item"><a href="">Contact us</a></li>

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