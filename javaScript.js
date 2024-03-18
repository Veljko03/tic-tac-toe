
const GameBoard = (function () {
    let gameboard =["", "","","","","","","",""];
    const container = document.querySelector(".gameBoard");
    const turn = document.querySelector(".turn");
    let winCondition= [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ], 
        [ 6, 7, 8 ], 
        [ 0, 3, 6 ], 
        [ 1, 4, 7 ], 
        [ 2, 5, 8 ], 
        [ 0, 4, 8 ],
        [ 6, 4, 2 ], 
    ]
    
    const makeBoard =() => {
        for(let i=0; i<gameboard.length; i++){
            const cell = document.createElement("div");
            gameboard[i] = cell.value;
            cell.setAttribute("class", "cell");
            //cell.innerHTML = playedClick();
            container.appendChild(cell);
            turn.innerHTML = playerControl.getTurn()+"'s turn";
            cell.addEventListener("click", ()=>{
                if(cell.innerHTML == ""){
                    playerControl.playRound();
                    turn.innerHTML = playerControl.getTurn() +"'s turn";
                    cell.innerHTML = playerControl.getActivePlayer();
                    gameboard[i] = playerControl.getActivePlayer();
                    console.log(gameboard);
                }
                
                
            })
            
        }
            

        
        
    }
    return{
        makeBoard,
        
    }
})();




const playerControl= (() =>{
    const players = [
        {
            name:"first player",
            value: "X"
        },
        {
            name:"second player",
            value: "O"
        }
    ];
    let activePlayerValue = players[1].value;
    let activePlayerName = players[0].name;
    const change = () => {
        if(activePlayerValue == players[1].value && activePlayerName == players[0].name){
            activePlayerValue=    players[0].value;
            activePlayerName = players[1].name;
        }else{
            activePlayerValue = players[1].value;
            activePlayerName = players[0].name;
        }
    }
    const getActivePlayer = () => activePlayerValue;
    const getTurn = () => activePlayerName;

    const playRound = () => {
        
        change();
        
      };
    return {
        getActivePlayer,
        playRound,
        getTurn,

    }
})();

















const btnStart = document.querySelector("#btnStart");
let boardMade;
btnStart.addEventListener("click", () => {
    
    if(!boardMade){
        GameBoard.makeBoard();
        boardMade=true;
    }
    
})




