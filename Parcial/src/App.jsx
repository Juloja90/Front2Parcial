import React, { useState } from "react";
import Card from "./Card";


function App() {

  const [nombre, setNombre] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || nombre.trim().startsWith(" ")) {
      setError("ese no es tu nombre 🧐");
      return;
    }
    if (pokemon.length >12) {
      setError("Por favor, ingrese un pokemon válido, todos sabemos que tienen un nombre más corto que ese 🧐.");
      return;
    }

    setError(null);

    setSubmittedData({ nombre, pokemon });
  };

  return (
    <div className="App">
      <h1>Pokemon Favorito</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
        />
        </div>

        <div>
          <label htmlFor="pokemon">Pokemon:</label>
          <input
            type="pokemon"
            id="pokemon"
            value={pokemon}
            onChange={(e) => setPokemon(e.target.value)}
            placeholder="Ingresa tu pokemon favorito"
          /> 
        </div>

        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{color:"red"}}className="error">{error}</p>}

      {submittedData && !error && <Card data={submittedData} />}

    </div>
  );
}


export default App;
