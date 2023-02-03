// //viendo la data veo que me viene info y results
// //en info tengo mas datos 

// import { useState, useEffect } from "react";

// const App = () => {
//   const [episodios, setEpisodios] = useState([]);
//   // const [paginas, setPaginas] = useState(0);
//   const [info, setInfo] = useState({}); // Para leer info.pages nos va a traer un problema porque no puede leer un objeto vacion hasta que haga fetch, por eso se rompe. si esta vacio dice undefinde, pero si dice undefined lo rompe
//   console.log("info", info);
//   const objeto = {};
//   console.log("objeto", objeto);//vacio
//   console.log("objeto.if", objeto.fd);//undefined
//   // console.log("objeto.if.fdf", objeto.fd.fdfd); //se rompe
//   console.log("objeto.if.fdf", objeto?.fd?.fdfd); //para que no rompa

//   useEffect(() => {
//     fetch(`https://rickandmortyapi.com/api/episode/`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("data", data);
//         setEpisodios(data.results);
//         // setPaginas(data.info.pages);
//         setInfo(data.info)
//       });
//   }, []);

//   console.log("se renderizo app"); 

//   return (
//     <div>
//       {/* Paginas:{paginas} */}
//       Pagina con info:{info.pages}
//       {episodios.map((episodio) => (
//         <h2> {episodio.name}</h2>
//       ))}
//     </div>
//   );
// };

// export default App;


// Igual pero con data 

import { useState, useEffect } from "react";

const App = () => {
  const [episodios, setEpisodios] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/`)
      .then((res) => res.json())
      .then((data) => {
        setEpisodios(data.results);
        setData(data)
      });
  }, []);

  console.log("renderizamos app")

  return (
    <div>
      {/* Pagina {data.info.pages} */} 
      {/* Pagina {data && data.info && data.info.pages} */}
      Pagina {data?.info?.pages}
      {episodios.map((episodio) => (
        <h2> {episodio.name}</h2>
      ))}
    </div>
  );
};

export default App;