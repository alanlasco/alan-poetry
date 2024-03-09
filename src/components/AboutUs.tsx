import React from "react";
import "../stylesheets/Aboutme.css";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="aboutme-container">
        <div className="aboutme-content">
          <div className="picture-name">
            <img
              className="img-alan"
              src={require(`../images/alan.jpg`)}
              alt=""
            />
          </div>
          <div className="text-container">
            <span className="about-alan">Sobre Alan Lasco</span>
          </div>
        </div>
        <div className="about-alan-text">
          <p>
            Mi pasión por la escritura comenzó como muchas otras historias,
            experiencias y pasiones: en el colegio. Gracias a las clases de
            literatura, empezamos a sumergirnos en un lugar tan profundo que ha
            llegado a hacer llorar a los compañeros más duros, aquellos que se
            sientan en los últimos bancos. Nos adentramos en el mundo de la
            poesía.
            <br />
            <br />
            Me atrajo tanto ese mundo que escribía poemas para mostrarle a la
            profesora, aunque no fuera una actividad programada por ella.
            Comenzamos leyendo un libro que recopilaba muchos poemas de
            distintos autores, de los cuales no recuerdo sus nombres. Luego,
            empezamos a escribir, haciendo collages con partes de estos poemas.
            Después, sentí la curiosidad de investigar sobre poetas. En ese
            momento, recordé la historia de César González (escritor, poeta,
            cineasta, filósofo) e inmediatamente fui a comprarme alguno de sus
            libros, y me encantaron.
            <br />
            <br />
            El proyecto final del curso consistía en armar un pequeño libro de
            poesía con la recopilación de poemas de todos los alumnos. El libro
            se llamó "Sin Principio ni Final". Lo conservo con mucho cariño, al
            igual que una frase que nos dijo la profesora: "Cuando escriben,
            ustedes son su propio Dios". Seamos libres al escribir y expresar
            todo lo que está en nuestra mente. Sean su propio dios.
            <br />
            <br />
            Espero que disfruten de mis poemas y escritos. ¡Espero que
            encuentren en ellos alguna frase que los transporte a un lugar
            especial!
          </p>
        </div>
      </div>
    </motion.div>
  );
}
export default AboutUs;
