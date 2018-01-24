


const SHIP = 1
for (i=0; i<5; i++) {
    var random= Math.floor(Math.random()*board.length-1)
    var row= board[random]
    var position =
    row.push(SHIP)
}
placeShip(){
    var randomNumberColumn = Math.floor(Math.random() * 9)
    var randomNumberRow = Math.floor(Math.random() * 9)
    var newBoard = this.state.board;
    newBoard[randomNumberColumn][randomNumberRow] = 1;
    this.setState({board: newBoard})
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

constructor(props){
    super(props){
        this.state = {

        }
    }
}
}



e.target.innerHTML= this.state.board[e.target.value][e.target.rows]

{this.props.board[i][rowNums]}
