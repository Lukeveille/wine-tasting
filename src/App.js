import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [wine, setWine] = useState('Red');

  console.log(wine)

  return (
    <div className="App">
      <select value ={wine} onChange={e => setWine(e.target.value)}>
        <option value="Red">Red</option>
        <option value="White">White</option>
      </select>
      <h1>{wine} Wine</h1>
      <h2>Color</h2>
      <h2>Fruit</h2>
      <h2>Non-Fruit</h2>
      <h2>Structure</h2>
      <h2>Conclusion</h2>
      <h2>Sales Pitch</h2>
    </div>
  );
}

export default App;
