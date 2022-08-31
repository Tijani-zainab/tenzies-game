import React from "react";
import "./../../App.css";

function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "none",
  }

  return (
    <div className="die-face" style={styles} onClick={props.holdDie}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}

export default Die;
