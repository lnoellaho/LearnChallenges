import React, { Component } from 'react';
import './App.css'
import Square from './square'
import Score from './score'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            board: [],
            torpedos: 25,
            position: []
        }
    this.setBoard()
    this.placeShipHorizontal()
    this.placeShipVertical()
    }

setBoard() {
    for (var i=0; i<10; i++){
    this.state.board.push([])
    }
}


placeShipHorizontal() {
    var ship = "H"
    var buffer = "X"
    for (var g=0; g<3; g++){
        var randomNumberColumn = (Math.floor(Math.random() * 8))
        var randomNumberRow = (Math.floor(Math.random() * 9))

        var newBoard = this.state.board

        if(newBoard[randomNumberColumn][randomNumberRow] === ship) {
            g--;
        } else {
            newBoard[randomNumberColumn][randomNumberRow]= ship
            newBoard[randomNumberColumn+1][randomNumberRow]= ship

            newBoard[randomNumberColumn][randomNumberRow+1]= buffer
            newBoard[randomNumberColumn][randomNumberRow-1]= buffer

            newBoard[randomNumberColumn+1][randomNumberRow+1]= buffer
            newBoard[randomNumberColumn+1][randomNumberRow-1]= buffer

            newBoard[randomNumberColumn+2][randomNumberRow]= buffer
            newBoard[randomNumberColumn+2][randomNumberRow+1]= buffer
            newBoard[randomNumberColumn+2][randomNumberRow-1]= buffer

                if(randomNumberColumn > 1) {
                    newBoard[randomNumberColumn-1][randomNumberRow]= buffer
                    newBoard[randomNumberColumn-1][randomNumberRow+1]= buffer
                    newBoard[randomNumberColumn-1][randomNumberRow-1]= buffer

                    newBoard[randomNumberColumn-2][randomNumberRow]= buffer
                    newBoard[randomNumberColumn-2][randomNumberRow+1]= buffer
                    newBoard[randomNumberColumn-2][randomNumberRow-1]= buffer
                } else if (randomNumberColumn == 1) {
                    newBoard[randomNumberColumn-1][randomNumberRow]= buffer
                    newBoard[randomNumberColumn-1][randomNumberRow+1]= buffer
                    newBoard[randomNumberColumn-1][randomNumberRow-1]= buffer
                }

            this.setState({board: newBoard})
        }
    }
}


placeShipVertical() {
    var ship = "V"

    for (var g=0; g<2; g++){
        var randomNumberColumn = (Math.floor(Math.random() * 9))
        var randomNumberRow = (Math.floor(Math.random() * 9))

        var newBoard = this.state.board

        if(newBoard[randomNumberColumn][randomNumberRow] === ship) {
            g--;
        } else {
            newBoard[randomNumberColumn][randomNumberRow]= ship
            newBoard[randomNumberColumn][randomNumberRow+1]= ship
            this.setState({board: newBoard})
        }
    }
}

handleOnClick(e) {
    var position = e.target.id
    position = position.split("")

    e.target.innerHTML = this.state.board[position[0]][position[2]]

    var torpedocount = this.state.torpedos

    if (this.state.torpedos === 0 ) {
        alert("GAME OVER")
    }
    else if (e.target.className === "hit" || e.target.className === "miss") {
        return alert("Don't be stupid")
    }
    else if (e.target.innerHTML === "O" || e.target.innerHTML === "H" || e.target.innerHTML === "V") {
        e.target.className = "hit";
        this.setState({torpedos: torpedocount-1})

    } else {
        e.target.className = "miss";
        e.target.innerHTML= ""
        this.setState({torpedos: torpedocount-1})
    }

    console.log(this.state.torpedos)
}

  render() {
      console.log(this.state.board)
      console.log(this.state.position)
    return (
        <div className="app">
            <Square handler={this.handleOnClick.bind(this)} board={this.state.board}/>

            <Score torpedos={this.state.torpedos}/>
        </div>
    );
  }
}

export default App;
