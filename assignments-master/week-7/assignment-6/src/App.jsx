import { useState } from "react";
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);

  return (
    <div className="app-container">
      <h1 className="title">Birthday Wisher</h1>
      {!isNameEntered ? (
        <div className="form-container">
          <div>
            <h2 title="form-title">Enter Your Name</h2>
          </div>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            className="name-input"
          />
          <button onClick={() => setIsNameEntered(true)} className="btn">
            Done
          </button>
        </div>
      ) : (
        <div className="cards-container">
          <div className="card">
            <h2>Hoping all your birthday wishes come true! Happy birthday, {name}!</h2>
          </div>
          <div className="card">
            <h2>Another year older, but still no wiser! Happy birthday, {name}.</h2>
          </div>
          <div className="card">
            <h2>Happy birthday, {name}! You're amazing!</h2>
          </div>
        </div>
      )}
    </div>
  )
}

export default App