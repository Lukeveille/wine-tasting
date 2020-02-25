import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [wine, setWine] = useState('White'),
  [color, setColor] = useState(null),
  colors = wine === 'Red'? ['Garnet', 'Ruby', 'Purple'] : ['Straw', 'Yellow', 'Gold'],
  fruitColor = wine === 'Red'? ['Red', 'Black', 'Blue'] : ['Apple / Pear', 'Citrus', 'Stone Fruit', 'Tropical'],
  nonFruit = wine === 'Red'?
  [
    'Floral',
    'Vegetal, Green Pepper',
    'Savory Dried Herbs, Tomato Leaf',
    'Mint, Eucalyptus',
    'Peppercorn',
    'Coffee, Cocoa, Mocha',
    'Game, Blood, Cured Meat, Leather',
    'Balsamic, Tar',
    'Organic Earth: Forest Floor, Wet Leaves, Mushrooms',
    'Inorganic Earth: Stone, Rock, Mineral, Sulfur',
    'New Oak: Vanilla, Smoke, Toast, Coconut'
  ]
  :
  [
    'Floral',
    'Herbal',
    'Vegetal',
    'Botrytis: Gingered, Honeyed, Waxy',
    'Oxidative, Nutty',
    'Lees: Doughy, Baked Bread, Yeasty',
    'Buttery, Creamy',
    'Organic Earth: Wet Leaves, Yes No Mushrooms',
    'Inorganic Earth: Stone, Rock, Mineral, Sulfur',
    'New Oak: Vanilla, Brown Baking Spices, Smoke'
  ],
  structures = wine === 'Red'? ['Tannin', 'Acid', 'Alcohol'] : ['Bitter, Phenolic', 'Sweetness', 'Acid', 'Aclohol'];

  return (
    <div className="App">
      <select value ={wine} onChange={e => setWine(e.target.value)}>
        <option value="Red">Red</option>
        <option value="White">White</option>
      </select>
      <h1>{wine} Wine</h1>
      <h2>Color</h2>
      <table>
        <tbody>
          <tr>
            <td>The color is:</td>
            {colors.map(c => (
              <td key={c}>
                  {c} <input
                  type="radio"
                  name="color"
                  value={c}
                  checked={color === c? true : false}
                  onChange={e => setColor(e.target.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <hr />
      <h2>Fruit</h2>
      <table>
        <tbody>
          {fruitColor.map(fc => (
            <tr key={fc}>
              <td>{fc}</td>
              <td>Yes <input type="radio" name={fc} value={true}/></td>
                <td>No <input type="radio" name={fc} value={false}/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <tbody>
          {['Nose', 'Palate'].map(np => (
            <tr key={np}>
              <td>Fruit Condition - {np}</td>
              <td>Tart <input type="radio" name={np}/></td>
              <td>Ripe <input type="radio" name={np}/></td>
              <td className="tightd">
                <p>Overripe</p>
                <p>Jammy</p>
                <p>Stewed</p>
              </td>
              <td className='tdcheck'>
                <input type="radio" name={np}/>
              </td>
              <td className="tightd">
                <p>Baked</p>
                <p>Dried</p>
                <p>Bruised</p>
              </td>
              <td className='tdcheck'>
                <input type="radio" name={np}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <h2>Non-Fruit</h2>
        <table>
          <tbody>
            {nonFruit.map(nf => (
              <tr key={nf}>
                <td>{nf}</td>
                <td>Yes <input type="radio" name={nf} value={true}/></td>
                <td>No <input type="radio" name={nf} value={false}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      <h2>Structure</h2>
      <table>
        <tbody>
          {structures.map(struct => (
            struct === 'Bitter, Phenolic'?
            <tr key={struct}>
              <td>{struct}</td>
              <td>Yes </td>
              <td><input type="radio" name={struct}/></td>
              <td className='tightd'>No </td>
              <td className='tdcheck'><input type="radio" name={struct}/></td>
            </tr>
            : struct === 'Sweetness'?
            <tr key={struct}>
              <td>{struct}</td>
              <td>Dry </td>
              <td><input type="radio" name={struct}/></td>
              <td className='tightd'>Off-Dry </td>
              <td className='tdcheck'><input type="radio" name={struct}/></td>
              <td className='tightd'>
                <p>Medium</p>
                <p>Sweet</p>
              </td>
              <td className='tdcheck'>
                <input type="radio" name={struct}/>
              </td>
            </tr>
            :
            <tr key={struct}>
              <td>{struct}</td>
              <td className='tightd'>
                <p>Low to</p>
                <p>Mod. Minus</p>
              </td>
              <td className='tdcheck'>
                <input type="radio" name={struct}/>
              </td>
              <td className='tightd'>Moderate </td>
              <td className='tdcheck'><input type="radio" name={struct}/></td>
              <td className='tightd'>
                <p>Moderate</p>
                <p>Plus</p>
              </td>
              <td className='tdcheck'>
                <input type="radio" name={struct}/>
              </td>
              <td>
                High <input type="radio" name={struct}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Conclusion</h2>
      <h2>Sales Pitch</h2>
    </div>
  );
}

export default App;
