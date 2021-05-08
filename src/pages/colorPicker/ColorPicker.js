import { useState } from "react";
import './ColorPicker.css';

export default function ColorPicker() {

  const [color, setColor] = useState({
    red: 0,
    green: 0,
    blue: 0,
    alpha: 1
  });


  const onInputChange = (event) => {

    const value = Number(event.target.value);
    const name = event.target.name;

    setColor({
      ...color,
      [name]: value
    });
  };

  const currentSelectedColor = `rgba(${color.red},${color.green},${color.blue},${color.alpha})`;
  return(
    <div className="div-container">
      <h2>Color Picker</h2>
      <div className="color-box" style={{backgroundColor: currentSelectedColor}}></div>
      <label> red:
        <input 
        name="red"
        type="range"
        value={color.red}
        min="0"
        max="255"
        onChange={onInputChange}
        className="red"
        />
      </label>
      <br />
      <label> green:
        <input 
        name="green"
        type="range"
        value={color.green}
        min="0"
        max="255"
        onChange={onInputChange}
        className="green"
        />
      </label>
      <br />
      <label> blue:
        <input 
        name="blue"
        type="range"
        value={color.blue}
        min="0"
        max="255"
        onChange={onInputChange}
        className="blue"
        />
      </label>
      <br />
      <label> alpha:
        <input 
        name="alpha"
        type="range"
        value={color.alpha}
        min="0.0"
        max="1.0"
        onChange={onInputChange}
        className="alpha"
        />
      </label>
      <br />
      {currentSelectedColor}
    </div>
  )

}

