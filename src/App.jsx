import React, { useState } from "react";

function App() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 32);
    setRandomNumber(randomNum);
  };

  return (
    <div className="container">
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
      <div className="grid">
        {Array.from({ length: 32 }, (_, index) => (
          <div
            key={index}
            className={`cell ${index === randomNumber ? "selected" : ""}`}
          >
            {index}
          </div>
        ))}
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
    </div>
  );
}

export default App;
