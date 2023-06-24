import React from "react";


function Tickler() {
  function tickle() {
    console.log("Teehee!");
  }
  return (
      <button onClick = { tickle } >Tickle Me!</button>
  )
}


export default Tickler;