// Create a World (bricks, coins, empty spaces) with a multidimensional array assigning numbers: 2 for brick, 1 for coin. 0 for empty.
var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,0,1,1,2,0,1,1,1,2],
    [2,1,1,1,2,0,1,1,1,2],
    [2,1,1,1,2,1,1,1,2,2],
    [2,1,1,1,2,2,2,1,2,2],
    [2,1,1,1,1,1,2,1,2,2],
    [2,1,1,2,2,2,2,1,2,2],
    [2,1,1,2,1,1,1,1,1,2],
    [2,1,0,1,1,2,2,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

// create object pacman to store multiple properties with {"key":value, "key":value,...}
var pacman = {
    "x": 1,
    "y": 1
};

// create variable score:
var score = 0;

// Create a function that iterates through the world and looks like the html doc, with all bricks, coins and empty spaces.
function displayWorld () {
    var output = "";     // var output empty string
    for (var i=0; i<world.length; i++){      // for loop through the multidimensional array (i,j)
        output += "\n<div class=row>";
        for (var j=0; j<world[i].length; j++){
            if (world[i][j] == 2){
                output += "\n\t<div class=brick></div>";
            }
            else if (world[i][j] == 1){
                output += "\n\t<div class=coin></div>";
            }
            else if (world[i][j] == 0){
                output += "\n\t<div class=empty></div>";
            }
        }
        output += "\n</div>";
    }
    // console.log(output);   // printing on the console, call it on the console displayWorld()
    document.getElementById("world").innerHTML = output;
}

// Create function to displayPacman (something we did before with HTML and CSS), we need the object created above and here is the function to create it:
function displayPacman() {
    document.getElementById("pacman").style.top = pacman.y*20+"px"
    document.getElementById("pacman").style.left = pacman.x*20+"px"
}

// Create a function to displayScore, we also need (above) a var score.
function displayScore() {
    document.getElementById("score").innerHTML = score;
}

displayWorld();  // call the functions
// displayPacman(); 
// displayScore();

// function(e) is executed by browser when keydown when arrows are pressed. Defined movement as new position of pacman each time an arrow key is pressed.
document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[pacman["y"]][pacman["x"]-1] != 2) {
        pacman["x"] --;
    }
    else if (e.keyCode == 39 && world[pacman["y"]][pacman["x"]+1] != 2) {
        pacman["x"] ++;
    }
    else if (e.keyCode == 38 && world[pacman["y"]-1][pacman["x"]] != 2 ) {
        pacman["y"] --;
    }
    else if (e.keyCode == 40 && world[pacman["y"]+1][pacman["x"]] != 2) {
            pacman["y"] ++;
    }
    // Make coins to dissapear when pacman's position is on the coin's position
    if (world[pacman["y"]][pacman["x"]] == 1) {
        world[pacman["y"]][pacman["x"]] = 0;
        score += 10;
    }
    displayWorld();
    displayPacman();
    displayScore();
}
    // document.getElementById("pacman").style.left = 50+"px" (first definition to move it when pressed left arrow for the property onkeydown)
    // console.log(e);  // related to console.dir(document) to check properties
    // console.log(e.keyCode); // to check keycode on the console

    //  Modification of the way we display pacman's position on pacman notes.

    // Idea I had that was close to solution: && world[pacman["y"]][pacman["x"]] != 2, needed to specify the future position: left -x ; right +x ; up -y ; down +y.  










