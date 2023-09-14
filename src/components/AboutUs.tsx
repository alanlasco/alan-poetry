import React from 'react'
import {motion} from 'framer-motion';

 function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >AboutUs</motion.div>
  )
}
export default AboutUs;
