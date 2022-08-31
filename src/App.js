import React from "react";
import { useState } from "react";
import './App.css';
import Die from "./component/Die/Die";

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice() { // this function will generate a new array of random numbers
    let arrNum = []
    for (let i = 0, c = 10; i < c; i++) {
      arrNum.push(Math.round(Math.random() * 6))
    }
    return arrNum;
  }

  const rollDice = dice.map(die => <Die value={die} />); // this function will map the array of random numbers to the dice component

  return (
    <main className="main">
      <h1 className="logo">Tenzies</h1>
      <h2>Dice Roller</h2>
      <div className="dice-container ">
        {rollDice}
      </div>
      <button className="btn" onClick={() => setDice(allNewDice())}>Roll Dice</button>
    </main>
  );
}

export default App;

//pull setemi's changes
//make sure you commit local change before "pulling" to avoid conflict