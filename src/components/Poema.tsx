
import { reqPoema } from '../interfaces/reqPoema.js';


const Poema = (props:reqPoema) => {
    return (
        <div key={props.id_poema}>
            <h4>{props.nombre}</h4>
            <p>{props.poema}</p>
            <p>{props.fecha}</p>
        </div >
    )
}
export default Poema;
