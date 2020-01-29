import React from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      turn: 'X'
    }
  }
  clicked(event){
      event.target.innerText = this.state.turn
      this.setState({
        turn: this.state.turn === 'X'?'O':'X'
    })
  }
  render(){
  return (
    <div id="game">
          <h1>TIC TAC TOE</h1>
          <h3>Player 1:X Player 2:O</h3>
        <div id="board" align="center" onClick={(e)=>this.clicked(e)}>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
    </div>
      );
}
}
export default App;
