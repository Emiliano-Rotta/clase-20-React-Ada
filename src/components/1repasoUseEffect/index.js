//repaso
//no hay fetch sin useEffect pero si puede haber useEffect sin fetch

import { useState, useEffect } from "react";

const App = () => {
  const [episodios, setEpisodios] = useState([]);
  // const [episodios, setEpisodios] = useState({}); // de esta manera rompe el map porque el map solo recorre array. hay que ver que tengo en la data para saber como hacer el estado inicial y el metodo que voy a utilizar

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/`)
      .then((res) => res.json())
      .then((data) => setEpisodios(data.results));
  }, []);

  console.log(episodios);
  console.log("se renderizo app"); 

  return (
    <div>
      {episodios.map((episodio) => (
        <h2> {episodio.name}</h2>
      ))}
    </div>
  );
};

export default App;
