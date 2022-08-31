import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import './App.css';
import Die from "./component/Die/Die";

function App() {

  const [dice, setDice] = useState(allNewDice());

  function allNewDice() { // this function will generate a new array of random numbers
    let arrNum = []
    for (let i = 0, c = 10; i < c; i++) {
      arrNum.push(
        {
          value: Math.round(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        })
    }
    return arrNum;
  }

  const rollDice = dice.map(die => <Die
    holdDie={() => holdDie(die.id)}
    isHeld={die.isHeld}
    key={die.id}
    value={die.value} />); // this function will map the array of random numbers to the dice component

  const roll = () => { setDice(allNewDice()); }

  function holdDie(id) {
    setDice(dice.map(die => {
      if (die.id === id) {
        die.isHeld = !die.isHeld;
      }
      return die;
    }));

    console.log(id);
  }

  return (
    <main className="main">
      <h1 className="logo">Tenzies</h1>
      <h2>Dice Roller</h2>
      <div className="dice-container">
        {rollDice}
      </div>
      <button className="btn" onClick={roll}>Roll Dice</button>
    </main>
  );
}

export default App;

//pull setemi's changes
//make sure you commit local change before "pulling" to avoid conflict