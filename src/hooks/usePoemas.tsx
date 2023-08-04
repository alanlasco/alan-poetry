import { useState, useEffect } from "react"
import { reqPoema } from "../interfaces/reqPoema"
import axios from 'axios';

export const usePoemas = () => {
    const [poemas, setPoemas] = useState<reqPoema[]>([]);
    const url = 'http://localhost/BackEndconPHP/carga-datos/mostrar-api.php';
    useEffect(()=>{
        cargarPoemas();
    })

    const cargarPoemas = () =>{
        axios.get(url)
            .then(response => { setPoemas(response.data) })
            .catch(error => {
                console.error('Error fetching Data: ', error) })

    }

  return {
    poemas,
  }
}
