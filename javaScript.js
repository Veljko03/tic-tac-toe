
const GameBoard = (function () {
    const makeBoard = () =>{
        const gameBoard = document.querySelector(".gameBoard"); 
        for(let i=0; i<9;i++){
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell")
            gameBoard.appendChild(cell);

            cell.addEventListener("click", ()=>{
                
            })
        }
    }
    
    return{
        makeBoard,
    }
    
})();













const btnStart = document.querySelector("#btnStart");
btnStart.addEventListener("click", () => {
    GameBoard.makeBoard();
})




