import {useEffect, useState} from 'react';
import axios from  'axios'; 
import { reqPoema } from '../interfaces/reqPoema';

export const usePoema = () => {
    const [data, setData] = useState<reqPoema[]>([]);//Almaceno datos de API
    const url = 'http://localhost/BackEndconPHP/carga-datos/mostrar-api.php';
    //obtengo datos de la API
    const fetchData = () => {
        axios.get(url)
            .then(response => { setData(response.data) })
            .catch(error => { console.error('Error fetching Data: ', error) });
    };
    //funcion para obetener los datos cuando se renderiza el componente
    useEffect(() => {
        fetchData();
    }, []);

  return {
    data,
  }
}
