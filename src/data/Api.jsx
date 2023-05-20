import React, { useEffect, useState } from 'react';
import axios from 'axios';
//PRUEBAS DE API
const MiComponente = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/muralista/getAllMuralistas');
        setData(response.data);
      } catch (error) {
        console.error("no funciona");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Datos de la API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.seudonimo}</li>
        ))}
      </ul>
    </div>
  );
};

export default MiComponente;
