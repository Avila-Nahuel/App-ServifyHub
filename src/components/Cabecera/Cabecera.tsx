import './Cabecera.css'
import { useState } from 'react';

const Cabecera = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className={`Cabecera ${menuVisible ? 'menu-visible' : ''}`}>
            <button className="Cabecera-button" onClick={toggleMenu}>
                <div className={`div-button ${menuVisible ? 'menu-active' : ''}`}></div>
                <div className={`div-button ${menuVisible ? 'menu-active' : ''}`}></div>
                <div className={`div-button ${menuVisible ? 'menu-active' : ''}`}></div>
            </button>
                <div className="Search-bar">
                    <input type="text" placeholder="Buscar" className="Search-input" />
                    <button className="Search-button">Buscar</button>
                   
               </div> 
               <div className='button-rigth'>
                    <button className="Extra-button Extra-button1">Iniciar Sesión</button>
                    <button className="Extra-button Extra-button2">Únete</button>
                </div>
            <nav className={`Cabecera-nav ${menuVisible ? 'show-menu' : ''}`}>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li Cabecera-li1"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Mis Reservas</a></li>
                    <li className="Cabecera-li Cabecera-li1"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Perfil</a></li>
                    <li className="Cabecera-li Cabecera-li1"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Notificaciones</a></li>
                    <li className="Cabecera-li Cabecera-li1"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Historial de Reseñas</a></li>
                    <li className="Cabecera-li Cabecera-li1"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Ofertas y Promociones</a></li>
                </ul>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Ayuda y Soporte</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Favoritos</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Compartir en Redes Sociales</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Búsqueda Avanzada</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Cerrar Sesión</a></li>
                </ul>
                <ul className="Cabecera-ul">
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Calendario de Citas</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Perfil Empresarial</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Gestión de Reservas</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Comunicación con Clientes</a></li>
                    <li className="Cabecera-li"><a href="" className={`Cabecera-a ${menuVisible ? 'show' : ''}`}>Estadísticas y Análisis</a></li>
                </ul>
            </nav>
            <div className="Nav-bar">
        </div>
        </header>
    );
};


export default Cabecera