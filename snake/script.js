var blockSize = 25;
var rows = 20;
var cols = 20;
var board , context ;


var snakeX = blockSize*5 ;
var snakeY = blockSize*5 ;
var velocityX = 0;
var velocityY = 0;
var body = [];

var foodX ;
var foodY ;
var score = 0;
var score2money = 0;
var money = 0;
var scoreDisplay;
var moneyDisplay;
var gameOver = false;

window.onload = function (){
    board = document.getElementById("board");
    board.height = rows* blockSize;
    board.width = cols* blockSize;
    context = board.getContext("2d");
    scoreDisplay = this.document.getElementById("score");
    moneyDisplay = document.getElementById("money");


    spawnFood();
    document.addEventListener("keyup", changeDirection);
    setInterval(update, 1000/10);
}

function update (){
    context.fillStyle ="black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle = "red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if(snakeX == foodX && snakeY == foodY ){
        body.push([foodX,foodY]);
        spawnFood();
        score += 1;
        score2money +=1;
        if (score2money == 4){
            money +=1;
            score2money = 0;
        }
        scoreDisplay.textContent = "Score = "+score;
        moneyDisplay.textContent = "Money = "+money;
    }

    for (let i = body.length-1 ; i > 0 ; i--){
        body[i] = body[i-1];
    }

    if (body.length){
        body[0] = [snakeX , snakeY];
    }


    context.fillStyle="green";
    snakeX += velocityX *blockSize;
    snakeY += velocityY *blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i< body.length; i++){
        context.fillRect(body[i][0], body[i][1], blockSize, blockSize);
    }

    if (snakeX < 0 || snakeY < 0 || snakeX >= board.width || snakeY >= board.height){
        gameOver = true;
        alert("GAME OVER");
    }


}

function changeDirection (e){
    if (e.code == "ArrowUp"){
        velocityX =  0;
        velocityY = -1;
    }else if (e.code == "ArrowDown"){
        velocityX =  0;
        velocityY = 1;
    }else if (e.code == "ArrowLeft"){
        velocityX =  -1;
        velocityY = 0;
    } else if (e.code == "ArrowRight"){
        velocityX =  1;
        velocityY = 0;
    }
}



function spawnFood (){
    foodX = Math.floor(Math.random() * rows) * blockSize;
    foodY = Math.floor(Math.random() * cols)* blockSize;
}