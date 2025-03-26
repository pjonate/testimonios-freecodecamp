import React from "react" //se importa la biblioteca React
import "../hojas-de-estilo/Testimonio.css"

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require(`../imagenes/${props.imagen}`)}
        alt='Foto de Emma' 
      />

      <div className='contenedor-texto-testimonio'>
        <p className= 'nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
          <strong>{props.cargo}</strong> en {props.empresa}
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p> 
      </div>
    </div>
  )
}
export default Testimonio;
