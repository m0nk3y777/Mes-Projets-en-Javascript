document.addEventListener("DOMContentLoaded", ()=>{
    const gridDisplay = document.querySelector(".grid")
    const scoreDisplay = document.getElementById("score")
    const resultDisplay = document.getElementById("result")
    const turnDisplay = document.getElementById("turn")
    const restartBtn = document.getElementById("restart")

    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6], 
    ]

    const width = 3 
    let squares = []
    let isPlayerX = true


    function createBoard(){
        for(let i = 0 ; i < width*width ; i++){
            const square = document.createElement("div")
            gridDisplay.appendChild(square)
            squares.push(square)
            console.log(squares)
        }
    }

    function action(){
       squares.forEach((square, index) => { 
            square.addEventListener("click", () => {
                if (square.innerHTML != ""){return}
                console.log("La case " + index + " a été cliquée.")
                if(isPlayerX){
                    square.innerHTML = "X"
                    isPlayerX = false
                    turnDisplay.innerHTML = "Tour du joueur : O "
                } else {
                    square.innerHTML = "O"
                    isPlayerX = true
                    turnDisplay.innerHTML = "Tour du joueur : X "
                }
                checkWin()
            })
            
        })  
        
    }

    function restart (){
        restartBtn.addEventListener("click", ()=> {
            squares.forEach((square) => { 
                square.innerHTML = "";
                resultDisplay.innerHTML = "";
            })
            isPlayerX = true;
        })
    }

    function checkWin(){
        for (let i= 0; i<winningCombinations.length; i++){
            let val1 = squares[ winningCombinations[i][0] ].innerHTML
            let val2 = squares[ winningCombinations[i][1] ].innerHTML
            let val3 = squares[ winningCombinations[i][2] ].innerHTML

            // console.log("La valeur" + i + "est : " + val1)
            // console.log("La valeur" + i + "est : " + val2)
            // console.log("La valeur" + i + "est : " + val3)

            if(val1 == "X" && val1 == val2 && val2 == val3 && val1 != ""){
                resultDisplay.innerHTML="Victoire du joueur X !"
            } else if(val1 == "O" && val1 == val2 && val3 == val1 && val1 != ""){
                resultDisplay.innerHTML= "Victoire du joueur O !"
            } 
        }        
    }

    createBoard()
    action()
    restart()
})