import React, { Component } from 'react';
import './App.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [],
            torpedos: 25

        }
    this.setBoard()
    this.placeShip()
    }

setBoard() {
    for (var i=0; i<10; i++)
    this.state.board.push([])
}



renderColumn(rowNums) {
    var column = []
    var i = 0
    for (i=0; i<10; i++) {
        column.push(<td id={i+'_'+rowNums} className = "" onClick = {this.handleOnClick.bind(this)} >{this.state.board[i][rowNums]}</td>)
    }
    return column;
}


renderRows() {
    var rows = []
    var j = 0;
    for (j=0; j<10; j++) {
        rows.push(<tr>{this.renderColumn(j)}</tr>)

    }
    return rows;
}

placeShip() {
    var ship = "O"
    for (var g=0; g<5; g++){
    var randomNumberColumn = (Math.floor(Math.random() * 9))
    var randomNumberRow = (Math.floor(Math.random() * 9))
    var newBoard = this.state.board
    if(newBoard[randomNumberColumn][randomNumberRow] === ship) {
        g--;
    } else {
    newBoard[randomNumberColumn][randomNumberRow]= ship
    this.setState({board: newBoard})
    }
    }
}

handleOnClick(e) {
    if (this.state.torpedos === 0 ) {
        alert("GAME OVER")
    }
    else if (e.target.innerHTML === "O") {
        e.target.className = "hit";
    } else {
        e.target.className = "miss";
    }
    var torpedocount = this.state.torpedos
    this.setState({torpedos: torpedocount-1})
console.log(this.state.torpedos)

}

  render() {
      console.log(this.state.board)
    return (
        <div className="app">
        <table className="table">
            {this.renderRows()}

        </table>
            <div>

            </div>
        </div>
    );
  }
}

export default App;
