import React from "react";
import "../stylesheets/Home.css";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contenedor-bienvenida">
        <p className="bienvenida">Bienvenidos a</p>
        <div className="alan-poetry">
          <p className="alan">
            ALAN <span className="poetry">Poetry.</span>
          </p>
        </div>
        <br />
        <p className="sub-bienvenida">Poemario personal de Alan Lasco</p>
        <br />

        <div className="socials-contenedor">
          <a className="socials" href="https://github.com">
            <img src={require(`../images/github.png`)} alt="GitHub" />
          </a>
          <a className="socials" href="https://linkedin.com">
            <img src={require(`../images/linkedin.png`)} alt="LinkedIn" />
          </a>
        </div>
        <div className="div-circular">
          <img src={require(`../images/pluma-azul.png`)} alt="" />
        </div>
      </div>
    </motion.div>
  );
};
