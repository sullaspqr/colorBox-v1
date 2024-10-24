import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [selectedColor, setSelectedColor] = useState( { name: 'fehér', value: 'white'});
  const colors = [{ name:'piros', value: 'red' }, 
    { name:'kek', value: 'blue' },
    { name:'zold', value: 'green' },
    { name:'sarga', value: 'yellow' },
    { name:'rózsaszín', value: 'pink' }];
  return (
    <div>
      <h2>Színválasztó</h2>
      <ColorSelector colors={colors} onSelect={((colorValue) =>
      { const selected = colors.find(color => color.value === colorValue);
        setSelectedColor(selected);
      })} />
      <ColorBox colorName={selectedColor.name} colorValue={selectedColor.value} />
    </div>
  );
}

const ColorSelector = ({ colors, onSelect }) => {
  return (
      <div>
        {colors.map((color, index) => (
          <button key={index}
            onClick={() => onSelect(color.value)} style={{ margin: '5px' }}>
            {color.name}
          </button>
        ))}
      </div>
  );
}
const ColorBox = ({ colorName, colorValue }) => {
  return(
    <div style={{ 
      height: '200px', width: '200px', 
      margin: '20px auto', backgroundColor: colorValue 
      }}>
      <p style={{ color: 'white', textAlign: 'center'}}>
        Kiválasztott szín: {colorName}</p>
    </div>
  );
};
