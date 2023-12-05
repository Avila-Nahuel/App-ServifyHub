import './AtajosCard.css'
import { Button } from "../ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Prueba } from '../Prueba/Prueba'
import EmprendimientoCard from '../EmprendimientoCard/EmprendimientoCard'

const AtajosCard = () =>{

    return(
        <>
           <div className='atajos'> 
                <div className='div-conteiner'><Prueba></Prueba></div>
                <li className="atajos-li">Super Ofertas</li>
                <li className="atajos-li">Nuevo</li>
                <li className="atajos-li">Belleza</li>
                <li className="atajos-li">Almacenes</li>
                <li className="atajos-li">Populares</li>
                <li className="atajos-li">Mejores puntuados</li>
                <li className="atajos-li">Explorar</li>
        </div>
    </>
    )
}

export default AtajosCard