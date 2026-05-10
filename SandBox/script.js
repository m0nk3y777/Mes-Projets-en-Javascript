//DEFINITION ET APPEL DE LA MAP 

const map = document.getElementById("map")
const mapWidth = 700 
const mapHeight = 500
const playerCamp = (mapWidth/2) - 50

pause()
// GENERATION ET DEPLACEMENTS DU PLAYER

const playerWidth = 20
const playerHeight = 34
const direction = {"Haut": false, "Bas" : false, "Gauche":false , "Droite": false}
let isNear = false
function updateDirection(e,isPressed){
    switch (e.key) {
        case "ArrowDown":
            direction.Bas = isPressed
            break;
        case "ArrowUp":
            direction.Haut = isPressed
            break;
        case "ArrowLeft":
            direction.Gauche = isPressed
            break;
        case "ArrowRight":
            direction.Droite = isPressed
            break;
        default:
            break;
    }
}
const player = new Personnage(20,20)
document.addEventListener("keydown", (e) => updateDirection(e,true))
document.addEventListener("keyup", (e) => updateDirection(e,false))
player.spawnPosition()



// GENERATE  ET MOUVEMENTS ENNEMIES
const EnnemyWidth = 20
const EnnemyHeight = 20
let distance2player
const ennemy = new Ennemy(playerCamp+(mapWidth/2-EnnemyWidth)*Math.random(),(mapHeight-EnnemyHeight)*Math.random())
const RANGE = 100
ennemy.spawnPosition()

// GENERATE RESSOURCES 

const TreeHeight = 30
const TreeWidth = 30
const TREE_MAX = 20
const trees = []
for (let i = 0; i< TREE_MAX ; i++ ){
    trees.push( new Tree(playerCamp*Math.random(),mapHeight/2+(mapHeight/2-playerHeight)*Math.random()))
    trees[i].spawnPosition()
}

const RockHeight = 30
const RockWidth = 30
const ROCK_MAX = 10
const rocks = []
for (let i = 0; i< ROCK_MAX ; i++ ){
    rocks.push( new Rock(playerCamp*Math.random(),(mapHeight/2-playerHeight)*Math.random()))
    rocks[i].spawnPosition()
}


// GAMELOOP 

function update() {
  requestAnimationFrame(() => {
    if(!isPaused){
        player.mouvPersonnage()
        ennemy.spawnPosition()
        ennemy.ennemyMouv()
    }
    update();
  });
}

update();