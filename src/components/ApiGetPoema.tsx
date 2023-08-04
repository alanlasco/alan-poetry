import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Poema from './Poema';
import { reqPoema } from '../interfaces/reqPoema';
const ApiGetPoema = () => {
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
    return (
        <>
            {data.map((item) => (
                <Poema
                    id_poema={item.id_poema}
                    poema={item.poema}
                    nombre={item.nombre}
                    fecha={item.fecha}
                />
            ))}
        </>
    )
}
export default ApiGetPoema;