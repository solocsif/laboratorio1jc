import React, { useState } from 'react';
import Primercomponente from './componentes/Primercomponente';

function App() {
  const [info, setInfo] = useState([]);
  const [info2, setInfo2] = useState([]);

  let getData = () => {
    try {
      fetch("https://rickandmortyapi.com/api/character", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((rta) => rta.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setInfo(data.results);
        } else {
          console.log("ERROR: La propiedad 'results' no es un array");
        }
      })
      .catch((err) => {
        console.log("ERROR:" + err.message);
      });
    } catch (error) {
      console.log("ERROR:" + error.message);
    }
  }

  let getData2 = (name) => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/?name=${name}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((rta) => rta.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setInfo2(data.results);
        } else {
          console.log("ERROR: La propiedad 'results' no es un array");
        }
      })
      .catch((err) => {
        console.log("ERROR:" + err.message);
      });
    } catch (error) {
      console.log("ERROR:" + error.message);
    }
  }

  return (
    <>
      <Primercomponente getData1={getData} getData2={getData2} />
      <h2>All Characters</h2>
      <ul>
        {Array.isArray(info) ? (
          info.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
      <h2>Character by Name</h2>
      <ul>
        {Array.isArray(info2) ? (
          info2.map((item) => (
            <li key={item.id}>{item.name}: {item.status}: {item.species}</li>
          ))
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </>
  );
}

export default App;