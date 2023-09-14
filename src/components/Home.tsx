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
        <h1 className='bienvenida'>Bienvenidos</h1>



    </motion.div>
  )
}
