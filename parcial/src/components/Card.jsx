import React from 'react';

const Card = (props) => {
  const { departamentoEnElQueVives, departamentoFavorito } = props;

  return (
    <div className="card">
      <h2>Has ingresado:</h2>
      <p>Departamento en el que vives: {departamentoEnElQueVives}</p>
      <p>Departamento favorito: {departamentoFavorito}</p>
    </div>
  );
};

export default Card;