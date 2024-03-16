const btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", () => {
    alert("gelo world");
})




function gameBoard(){
    const rows= 3;
    const cols=3;
    const board = [];

    for(let i=0; i<rows; i++){
        board[i] = [];
        for(let j=0; j<cols; j++){
            board[i].push(Cell());
        }
    }
    const getBoard =()=>board;

    const printBoard = () => {
        for(let i=0; i<rows; i++){
            
            for(let j=0; j<cols; j++){
                
                console.log(board)[i][j];
            }
        }
    }

    const playerPlayed =(column,row,player)=>{

    }
   

      return{ getBoard, printBoard };
}


function Cell(){
    let value = 0;
    const played = (player) => {
        value = player;
    }

    const getValue = () => value;

    return{played,getValue};
}

function GameController(){
    const playerOne ="Player one";
    const playerTwo = "Player two";
    const players = [
        {
            name: playerOne,
            value:1
        },
        {
            name: playerTwo,
            value:2
        }
    ];
    let activePlayer = players[0];

    const switchPlayerTurn =() =>{
        if(activePlayer = players[0]){
            activePlayer = players[1];
        }else{
            activePlayer = players[1];
        }
    }

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
      };

      const playRound = () =>{
        console.log(`${getActivePlayer().name}'s turn`);

      }

    return{getActivePlayer,switchPlayerTurn};
}
gameBoard().printBoard();