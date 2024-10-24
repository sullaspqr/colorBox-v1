import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [selectedColor, setSelectedColor] = useState('white');
  const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  return (
    <div>
      <h2>Color Picker</h2>
      <ColorSelector colors={colors} onSelect={setSelectedColor} />
      <ColorBox color={selectedColor} />
    </div>
  );
}

const ColorSelector = ({ colors, onSelect }) => {
  return (
      <div>
        {colors.map((color, index) => (
          <button key={index}
            onClick={() => onSelect(color)} style={{ margin: '5px' }}>
            {color}
          </button>
        ))}
      </div>
  );
}
const ColorBox = ({ color }) => {
  return(
    <div style={{ 
      height: '200px', width: '200px', 
      margin: '20px auto', backgroundColor: color 
      }}>
      <p style={{ color: 'white', textAlign: 'center'}}>
        Selected color: {color}</p>
    </div>
  );
};
