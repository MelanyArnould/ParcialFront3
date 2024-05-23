import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
  const [departamentoEnElQueVives, setDepartamentoEnElQueVives] = useState('');
  const [departamentoFavorito, setDepartamentoFavorito] = useState('false');
  const [mensajeError, setMensajeError] = useState('false');

  const handleSubmit = (event) => {
    event.preventDefault();

    const regex = /^\s+/;
    if (
      departamentoEnElQueVives.length>3 &&
      regex.test(departamentoFavorito) 
    ) {
      setDepartamentoEnElQueVives(true);
      setDepartamentoFavorito(true);
      setMensajeError(false)
    } else {
      setMensajeError(true)
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>Departamento en el que vives:</label>
        <input
          type="text"
          value={departamentoEnElQueVives}
          onChange={(e) => setDepartamentoEnElQueVives(e.target.value)}
        />
        <label>Departamento favorito:</label>
        <input
          type="text"
          value={departamentoFavorito}
          onChange={(e) => setDepartamentoFavorito(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {mensajeError && <p className="error">{mensajeError}</p>}
      <Card></Card> 
    </div>
  );
};

export default Form;
