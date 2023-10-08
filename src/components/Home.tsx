import React from 'react'
import '../stylesheets/Home.css';
import { motion } from 'framer-motion';

export const Home = () => {
  return (

    <motion.div className='home-container'
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    
    >
        <div className='contenedor-bienvenida'>
        <h1 className='bienvenida'>Bienvenidos</h1>
        <br />
        <h3 className='sub-bienvenida'>Poemario de Alan Lasco</h3>
        <br />
        <div className='socials-contenedor'>
          <a className="socials" href="https://github.com">
            <img src={require(`../images/github.png`)} alt="GitHub" />
          </a>
          <a className="socials" href="https://linkedin.com">
            <img src={require(`../images/linkedin.png`)} alt="LinkedIn" />
          </a>
        </div>
        </div>


    </motion.div>
  )
}
