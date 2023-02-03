import { useEffect, useState } from "react";

const Modal = ({ handleClickCerrarModal }) => {

  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {

    setTimeout(()=>{
      fetch("https://rickandmortyapi.com/api/episode/")
      .then((res) => res.json())
      .then((data) => setEpisodios(data.results));
    },3000)
    return () => console.log("retorno useEffect")
    // return () => setEpisodios([]); //PROBAR DESCOMENTANDO Y FIJANDOSE EN LA CONSOLA
  }, []);

  console.log("se renderizo Modal");
  console.log(episodios);

 return (
    <div>
      <h1>hola</h1>
      <button onClick={handleClickCerrarModal}>Cerrar Modal</button>
    </div>
  );
};

export default Modal;