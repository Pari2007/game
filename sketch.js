var canvas, database, backimg, playerCount;
var form, player, game, backimage;
var gameState = 0;
function preload() {
  backimage = loadImage("img.jpg");
}
function setup() {
  database = firebase.database();
  canvas = createCanvas(700, 800);
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backimage);
}
