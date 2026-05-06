//DEFINITION ET APPEL DE LA MAP 

const map = document.getElementById("map")
const mapWidth = 700 
const mapHeight = 500



// GENERATION ET DEPLACEMENTS DU PLAYER

const playerWidth = 20
const playerHeight = 20
const direction = {"Haut": false, "Bas" : false, "Gauche":false , "Droite": false}
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
const ennemy = new Ennemy((mapWidth-playerWidth)*Math.random(),(mapHeight-playerHeight)*Math.random())
const RANGE = 100
ennemy.spawnPosition()

// GAMELOOP 

function update() {
  requestAnimationFrame(() => {
    player.mouvPersonnage()
    ennemy.spawnPosition()
    ennemy.ennemyMouv()
    update();
  });
}

update();