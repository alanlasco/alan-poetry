import React from 'react'
import { usePoemas } from '../hooks/usePoemas';
import { reqPoema } from '../interfaces/reqPoema';


export const Poemas = () => {
    const {poemas} = usePoemas();
    const renderPoemas = (poema: reqPoema) =>{
        return(
        <div key={poema.id_poema}>
            <h4>{poema.nombre}</h4>
            <p>{poema.poema}</p>
            <p>{poema.fecha}</p>
        </div >
        )

    }
  return (
    <>
    
    {
    poemas.map(renderPoemas)
    }
    </>
  )
}
