import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, SetBgColor] = useState("white");

  function changeBackground(color) {
    SetBgColor(color);
  }

  return (
    <div style={{ height: '100vh', backgroundColor: bgColor }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={() => {changeBackground("red")}} style={buttonStyle("red")}>Red</button>
        <button onClick={() => {changeBackground("yellow")}} style={buttonStyle("yellow")}>Yellow</button>
        <button onClick={() => {changeBackground("black")}} style={buttonStyle("black", "white")}>Black</button>
        <button onClick={() => {changeBackground("purple")}} style={buttonStyle("purple")}>Purple</button>
        <button onClick={() => {changeBackground("green")}} style={buttonStyle("green")}>Green</button>
        <button onClick={() => {changeBackground("blue")}} style={buttonStyle("blue")}>Blue</button>
        <button onClick={() => {changeBackground("white")}} style={buttonStyle("gray")}>Default</button>
      </div>
    </div>
  )
}

function buttonStyle(buttonColor, textColor = "black") {
  return {
    backgroundColor: buttonColor,
    color: textColor,
    border: 'none',
    padding: '10px 20px',
    margin: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  }
}

export default App
