import React from "react";

const Card = ({data}) => {
  return(
    data.nombre && data.pokemon? (
      <div className="card">
        <h3>Mira esto 😲:</h3>
        <p><strong>Hola </strong> {data.nombre}</p>
        <p><strong>Tu pokemon favorito es: </strong> {data.pokemon}, ¡Qué cool!</p>
      </div>
    ) : (
      <div className="card">
        <h3>Por favor ingrese los datos</h3>
      </div>
    )
  ) 
};

export default Card;