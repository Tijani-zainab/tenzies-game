import React from 'react';
import './App.css';
import Die from './component/Die/Die';

function App() {
  //   function allNewDice(max) {
  //     return Math.floor(Math.random() * max);
  // }

  // console.log(allNewDice(7));

  let arr = [];
  for (let i = 0, t = 6; i < t; i++) {
    arr.push(Math.round(Math.random() * t));
  }
  console.log(arr);

  // Array.from({length: 40}, () => Math.floor(Math.random() * 40));

  return (
    <main className="main">
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
        <Die value="1" />
      </div>
    </main>
  );
}

export default App;
