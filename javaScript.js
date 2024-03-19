
const GameBoard = (function () {
    let gameboard =["", "","","","","","","",""];
    const container = document.querySelector(".gameBoard");
    const turn = document.querySelector(".turn");
    let xWon=0;
    let oWon = 0;
    let maxValue = 0;
    let endOfGame = false;
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
            
            cell.setAttribute("class", "cell");
            container.appendChild(cell);
            turn.innerHTML = playerControl.getTurn()+"'s turn";
            cell.addEventListener("click", ()=>{
                if(cell.innerHTML == ""){
                    if(!endOfGame){
                        ++maxValue;
                        playerControl.playRound();
                        turn.innerHTML = playerControl.getTurn() +"'s turn";
                        cell.innerHTML = playerControl.getActivePlayer();
                        gameboard[i] = playerControl.getActivePlayer();
                        console.log(gameboard);
                        checkWinner(); 
                        isOverGame();
                    }
                }
                
                
            })  
            
        } 
    }
    const playNextRound =() =>{

           
    
            const btnPlayNextRound = document.createElement("button");
            btnPlayNextRound.innerHTML = "Play next round";
            boardContainer.appendChild(btnPlayNextRound);
            btnPlayNextRound.addEventListener("click", ()=>{
                boardContainer.removeChild(btnPlayNextRound);
                endOfGame =false;
                maxValue = 0;
                 gameboard =["", "","","","","","","",""];
                 console.log(gameboard);
                while(container.lastElementChild){
                    container.removeChild(container.lastElementChild);
                }
                makeBoard();
            })
        
    }
    const result = document.querySelector(".result");
    const boardContainer = document.querySelector(".board");
    
    const isOverGame = () =>{
         if(xWon==2 && oWon==2){
            const over = document.createElement("h1");
            over.textContent ="Game over it's draw"
            result.appendChild(over);
            playAgain();

        }
        
        else if(xWon ==2){
            const over = document.createElement("h1");
            over.textContent ="Game over x won"
            result.appendChild(over);
            playAgain();

        }
        else if(oWon == 2){
            const over = document.createElement("h1");
            over.textContent ="Game over O won"
            result.appendChild(over);
            playAgain();
            

        } 
    }


    const playAgain = () =>{
        boardContainer.removeChild(boardContainer.lastElementChild);

        const btnPlayAgain = document.createElement("button");
        btnPlayAgain.textContent = "Play again";

        boardContainer.appendChild(btnPlayAgain);
        btnPlayAgain.addEventListener("click",()=>{
            endOfGame =false;
            maxValue = 0;
            xWon = 0;
            oWon =0;
             gameboard =["", "","","","","","","",""];
             console.log(gameboard);
            while(container.lastElementChild){
                container.removeChild(container.lastElementChild);
            }
            while(result.lastElementChild){
                result.removeChild(result.lastElementChild);
            }
            makeBoard();
            boardContainer.removeChild(btnPlayAgain);
        })
        
    }


    const checkWinner = () =>{
        let checkX = 0;
        let checkO =0;
        

        
       
        if(maxValue == 9){
            turn.innerHTML = "Draw!";
            endOfGame = true;
            ++xWon;
            ++oWon;
            playNextRound();
            const displayResult = document.createElement("p");
                        displayResult.textContent = xWon + " : "+ oWon;
                        result.appendChild(displayResult);

        }

       for(let i =0; i<winCondition.length; i++){
            for(let j=0; j<winCondition[1].length;j++){
                
               
                if(gameboard[winCondition[i][j]] =='X'){
                    checkX++;
                    if(checkX == 3){
                        turn.innerHTML = "X won";
                        endOfGame =true; 
                        playNextRound();
                        checkX=0;
                        xWon++;
                        const displayResult = document.createElement("p");
                        displayResult.textContent = xWon + " : "+ oWon;
                        result.appendChild(displayResult);
                    }
                }
                else if(gameboard[winCondition[i][j]] =='O'){
                    checkO++;
                    if(checkO == 3){
                        turn.innerHTML = "O won";
                        endOfGame = true;
                        playNextRound();
                        checkO=0;
                        oWon++;
                        const displayResult = document.createElement("p");
                        displayResult.textContent = xWon + " : "+ oWon;
                        result.appendChild(displayResult);

                    }
                }
                
                
            

                
            }
            checkX =0;
            checkO =0;
       }
    }
    return{
        makeBoard,
         

        
    }
})();






const playerControl= (() =>{
    
    const playerOne = document.querySelector("#playeOne");
    const playerTwo = document.querySelector("#playerTwo");


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

const btnRestart = document.querySelector("#btnRestart");
btnRestart.addEventListener("click", ()=>{
    window.location.reload();
})


