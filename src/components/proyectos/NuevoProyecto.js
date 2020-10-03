import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'

const NuevoProyecto = () => {


  //obtener state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario } = proyectosContext;


  //state para proyecto
  const [ proyecto, guardarProyecto ] = useState({
    nombre: ''
  });

  //extraer nombre del proyecto
  const { nombre } = proyecto;


  //lee contenidos del input
  const onChangeProyecto = e => {
    guardarProyecto({
      ...proyecto,
      [e.target.name] : e.target.value
    })
  }

  //cuando el usuario envia un proycto
  const onSubmitProyecto = e => {
    e.preventDefault();

    //validar el proyecto

    //agregar al state

    //reiniciar el form


  }


  return(
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
      >Nuevo Proyecto</button>

    {
      formulario
      ? (
        <form
        className="formulario-nuevo-proyecto"
        onSubmit={onSubmitProyecto}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="nombre"
          value={nombre}
          onChange={onChangeProyecto}
        />
        <input
          type="submit"
          className="btn btn-primario btn-block"
          value="Agregar Proyecto"
        />
      </form>
      ) : null
    }

    </Fragment>


  );
}

export default NuevoProyecto;