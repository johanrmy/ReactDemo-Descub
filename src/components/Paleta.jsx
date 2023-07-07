import React, { useState } from 'react';


const DescubPaleta = () => {
  const [colors, setColors] = useState([
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#d6249f',
  ]);
  

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('');


  const filteredColors = colors.filter((color) =>
    color.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (

    <div class="container text-center">
    <div class="row align-items-center">
    <div class="col">
          <div>
            <h1 className="titulo">Paleta de colores</h1>
            <div className="color-palette">
              {filteredColors.map((color, index) => (
                <div
                  key={index}
                  className="color"
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>         
                        
              ))}
          </div>
        </div>
   
    </div>
    </div>
    <div class="row">
      <div class = "card" >
        <div class="card-body"></div>
        <h5 class="card-title">Detalles del Mural</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing 
          lit. Est atque maiores, laborum earum distinctio incidunt ullam odio soluta 
          laudantium numquam ipsum minima, architecto ipsam iure dolorum placeat. Ipsa, 
          aliquid nihil!</p>
        <p class="card-text mb-4">Lorem ipsum dolor sit amet consectetur adipisicing 
        lit. Est atque maiores, laborum earum distinctio incidunt ullam odio soluta 
        laudantium numquam ipsum minima, architecto ipsam iure dolorum placeat. Ipsa, 
        aliquid nihil!</p>
        <div class="container text-center">
        </div>
       </div>
      </div>
    </div>
    
  );
};

export default DescubPaleta;