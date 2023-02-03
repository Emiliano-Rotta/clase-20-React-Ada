import React from "react";
// import "./styles.css";
const INITIAL_VALUES = [
  {
    id: "1",
    value: "Seleccioname 1"
  },
  {
    id: "2",
    value: "Seleccioname 2"
  },
  {
    id: "3",
    value: "No me selecciones 1"
  },
  {
    id: "4",
    value: "No me selecciones 2"
  },
  {
    id: "5",
    value: "No me selecciones 3"
  }
];

export default function App() {
  const [listOne, setListOne] = React.useState(INITIAL_VALUES);
  const [listTwo, setListTwo] = React.useState(INITIAL_VALUES);
  const [listThree, setListThree] = React.useState(INITIAL_VALUES);

  const handleClickOne = () => {
    setListOne(listOne.slice().reverse());
  };

  const handleClickTwo = () => {
    setListTwo(listTwo.slice().reverse());
  };

  const handleClickThree = () => {
    setListThree(listThree.slice().reverse());
  };
  return (
    <div>
      <article>
        <h2>Lista sin keys</h2>
        <ul>
          {listOne.map((item, index) => (
            <li>
              <label>
                <input type="checkbox" />
                {item.value} <i>Mi indice es {index}</i>
              </label>
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleClickOne}>
          Cambiar el orden de la lista sin keys
        </button>
      </article>

      <article>
        <h2>Lista con index como keys</h2>
        <ul>
          {listTwo.map((item, index) => (
            <li key={index}>
              <label>
                <input type="checkbox" />
                {item.value} <i>Mi indice es {index}</i>
              </label>
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleClickTwo}>
          Cambiar el orden de la lista con index como keys
        </button>
      </article>

      <article>
        <h2>Lista con keys correctas</h2>
        <ul>
          {listThree.map((item, index) => (
            <li key={item.id}>
              <label>
                <input type="checkbox" />
                {item.value} <i>Mi indice es {index}</i>
              </label>
            </li>
          ))}
        </ul>

        <button type="button" onClick={handleClickThree}>
          Cambiar el orden de la lista con keys correctas
        </button>
      </article>

      <article>
        <h3>Problemas al no usar key, o usar index como key</h3>
        <ul>
          <li>
            Si no tengo keys en mi map, React va a actualizar los elementos
            teniendo en cuenta los indices en el array.
          </li>
          <li>
            Si hago alguna operacion que cambie esos indices (en este caso,
            reverse()), React va a cambiar el orden de los elementos teniendo en
            cuenta los nuevos indices ---- por eso siempre se mantienen
            seleccionados los dos primeros elementos, a pesar de que no sean los
            mismos que seleccionamos antes.
          </li>
          <li>
            En cambio, si uso keys correctas, como el id de cada elemento, React
            puede ubicar bien en el elemento en el DOM aunque los indices del
            array cambien.
          </li>
        </ul>
      </article>

      <article>
        <h3>Reglas de las keys</h3>
        <ul>
          <li>
            React necesita que las listas tengan keys para saber que posicion
            tiene cada elemento en el DOM, y poder organizarlas en caso de que
            algun elemento desaparezca, aparezca o se actualice.
          </li>
          <li>
            Cuando un componente se renderea nuevamente (en nuestro caso, las
            listas), React compara las keys que tienen sus hijos ahora con las
            que tenian antes.
          </li>
          <li>
            Si la key existe en el nuevo elemento pero no en el anterior, React
            crea un nuevo hijo
          </li>
          <li>
            Si la key existia antes y existe ahora, React ubica al hijo en la
            posicion que indica su key
          </li>
          <li>
            Si la key existia antes pero no existe ahora, React borra a ese
            elemento
          </li>
        </ul>
      </article>
    </div>
  );
}
