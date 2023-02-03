//Esto es solo para mostrar como seria, esta parte del codigo no funciona
import { useState } from "react";

const Input = () => {
  const [busqueda, setBusqueda] = useState({});
  const handleChange = (e) => setBusqueda(e.target.value);
  console.log("renderizamos Input")
  return (
      <div>
        <label>Busca un episodio de Rick y Morty</label>
        <input type="text" onChange={handleChange} />
      </div>
  );
};

export default Input;