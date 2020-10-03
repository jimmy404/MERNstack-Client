import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

  const tareasProyecto = [
    { nombre: 'Elegir plataforma', estado: true },
    { nombre: 'Elegir colores', estado: true },
    { nombre: 'Elegir pagos', estado: false },
    { nombre: 'Elegir antivirus', estado: true }
  ];

  return(
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ? (<li className="tarea"><p>No hay tareas</p></li>)
          : tareasProyecto.map(tarea => (
            <Tarea
              tarea={tarea}
            />
          ))
        }
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
      >Eliminar</button>
    </Fragment>
  );
}

export default ListadoTareas;