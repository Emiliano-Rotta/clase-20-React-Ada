//useEffect es opcional que la funcion de useEffect retorne algo, pero si retorna tiene que ser una funion SI O SI
//esta funcion se llama cleanup function (funcion de limpieza)
//   useEffect(() => {
    // return () => console.log("retorno de useEffect")
// }, []);

//el fetch puede tardar en traer a informacion, pero puede suceder que el usuario ya salio, o cerro antes de que el fetch lo renderice. Esto va a traer algunos problemas por eso hay que resolverlo



import { useState, useEffect } from "react";
import Modal from "./Modal";

const App = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleClickAbrirModal = () => setMostrarModal(true);

  const handleClickCerrarModal = () => setMostrarModal(false);

  console.log("Se renderizó el componente App");
  return (
    <div>
      <button onClick={handleClickAbrirModal}>Mostrar Modal</button>
      {mostrarModal && (
        <Modal handleClickCerrarModal={handleClickCerrarModal}/>
      )}
    </div>
  );
};

export default App;

//VER CICLOS DE VIDA DEL COMPONENTE clases y hooks