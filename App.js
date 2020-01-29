import React from 'react';
import './App.css';

class App extends Component{
render(){
  return (
    <div id="game">
          <h1>TIC TAC TOE</h1>
          <h3>Player 1:X Player 2:O</h3>
        <div id="board" align="center">
          <button id="1"></button>
          <button id="2"></button>
          <button id="3"></button>
          <br></br>
          <button id="4"></button>
          <button id="5"></button>
          <button id="6"></button>
          <br></br>
          <button id="7"></button>
          <button id="8"></button>
          <button id="9"></button>
        </div>
    </div>
      );
}
}
export default App;
