import { useState } from "react";
import "../stylesheets/Poema.css";
import { poemProps } from "../interfaces/inPoemProps";
export const showPoema = ({ id_poema, titulo, texto, fecha }: poemProps) => {
  return (
    <>
      <div className="contenedorPoema">
        <div className="headerPoema">
          <h4 className="tituloPoema">{titulo}</h4>

          <p className="separador"></p>
        </div>
        <p className="textoPoema">{texto}</p>
        <div className="footerPoema">
          <p className="fechaPoema">{fecha}</p>
        </div>
      </div>
    </>
  );
};
