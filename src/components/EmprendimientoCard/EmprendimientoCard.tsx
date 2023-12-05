

import './EmprendimientoCard.css';

interface EmprendimientoProps {
  nombre: string;
  descripcion: string;
  ubicacion: string;
  foto: string;
}

const EmprendimientoCard: React.FC<EmprendimientoProps> = ({
  nombre,
  descripcion,
  ubicacion,
  foto,
}) => {
  return (
    <div className="emprendimiento-card">
      <img src={foto} alt={nombre} className="emprendimiento-img" />
      <div className="emprendimiento-info">
        <h3 className="emprendimiento-nombre">{nombre}</h3>
        <p className="emprendimiento-descripcion">{descripcion}</p>
        <p className="emprendimiento-ubicacion">{ubicacion}</p>
      </div>
    </div>
  );
};

export default EmprendimientoCard;