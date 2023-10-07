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
        <p>Poemario de Alan Lasco</p>
        <br />
        <div className='socials-contenedor'>
          <a className="socials" href="https://github.com">
            <img src={githubImage} alt="GitHub" />
            GitHub
          </a>
          <a className="socials" href="https://linkedin.com">
            <img src={linkdnImage} alt="LinkedIn" />
            LinkedIn
          </a>
        </div>
        </div>


    </motion.div>
  )
}
