var database;
var bike1,bike2;
var track;
var bikes = []

function preload() {
    bikeImg  = loadImage("./assets/bike.png")
}

function setup(){
    canvas = createCanvas(600,600)
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}