import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

  const DescubPaleta = () => {
  const [colors, setColors] = useState([
    '#FF0000',
    '#00FF00',
    '#0000FF',
    '#FFFF00',
    '#00FFFF',
    '#FF00FF',
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedColor, setSelectedColor] = useState('');


  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const filteredColors = colors.filter((color) =>
    color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
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
      <div className="color-picker">
        <ChromePicker color={selectedColor} onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default DescubPaleta;