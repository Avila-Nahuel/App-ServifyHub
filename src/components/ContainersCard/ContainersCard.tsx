import './ContainersCard'
import EmprendimientoCard from '../EmprendimientoCard/EmprendimientoCard'

const ContainersCard = () => {

    return( 
    <>
    <EmprendimientoCard
        nombre="Nombre del Emprendimiento"
        descripcion="Descripción del Emprendimiento"
        ubicacion="Ubicación del Emprendimiento"
        foto="URL de la imagen"
    />
      <EmprendimientoCard
      nombre="Nombre del Emprendimiento"
      descripcion="Descripción del Emprendimiento"
      ubicacion="Ubicación del Emprendimiento"
      foto="URL de la imagen"
    />
    <EmprendimientoCard
    nombre="Nombre del Emprendimiento"
    descripcion="Descripción del Emprendimiento"
    ubicacion="Ubicación del Emprendimiento"
    foto="URL de la imagen"
    />
    </>
    )
}

export default ContainersCard