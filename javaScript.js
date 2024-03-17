
const GameBoard = (function () {
    let gameboard =["", "","","","","","","",""];
    const container = document.querySelector(".gameBoard");
    
    const makeBoard =() => {
        gameboard.forEach(element => {
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            //cell.innerHTML = playedClick();
            container.appendChild(cell);
            cell.addEventListener("click", ()=>{
                playerControl.playRound();
                cell.innerHTML = playerControl.getActivePlayer();
            })

        })
        
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
    const change = () => {
        if(activePlayerValue == players[0].value){
            activePlayerValue=    players[1].value;
        }else{
            activePlayerValue = players[0].value;
        }
    }
    const getActivePlayer = () => activePlayerValue;
    const playRound = () => {
        
        change();
        
      };
    return {
        getActivePlayer,
        playRound

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




