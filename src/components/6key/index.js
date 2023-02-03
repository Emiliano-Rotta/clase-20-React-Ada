import { useState, useEffect } from "react";
import Lista from "./components/Lista";

const App = () => {
  const [episodios, setEpisodios] = useState([]);
  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodios(data.results);
      });
  }, [busqueda]);


  console.log("Se renderizó el componente App");
  return (
      <div>
      {/* {episodios.map((episodio) => (
        <h2 key={episodio.id}>{episodio.name}</h2>
        // <h2 key={episodio.id}>{episodio.name}</h2>
      ))} */}
      <Lista />
    </div>
  );
};

export default App;