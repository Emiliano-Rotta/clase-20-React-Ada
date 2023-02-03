import { useState, useEffect } from "react";

const App = () => {
  const [episodios, setEpisodios] = useState([]);
  const [data, setData] = useState({});
  const [busqueda, setBusqueda] = useState({});

  useEffect(() => {
    // fetch(`https://rickandmortyapi.com/api/episode?name=ri`) //traeria solo los que empiezan con ri
    fetch(`https://rickandmortyapi.com/api/episode?name=${busqueda}`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodios(data.results);
        setData(data)
      });
  }, [busqueda]); //probar poniendo o sacando busqueda en el array de dependencia

  console.log("renderizamos app") //por cada letra se vuelve a renderizar, esto podria hacer mas lenta la pagina si fuera muy pesada la app

  const handleChange = (e) => setBusqueda(e.target.value);

  return (
    <div>
      <div>
        <label>Busca un episodio de Rick y Morty</label>
        <input type="text" onChange={handleChange} />
      </div>

      Pagina {data?.info?.pages}
      {episodios?.map((episodio) => (
        <h2> {episodio.name}</h2>
      ))}
    </div>
  );
};

export default App;
