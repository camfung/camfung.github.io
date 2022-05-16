let winWid = window.innerWidth * .4
let cols; 
var w;
let grid;
let backGroundColor;
let wallColor;
let lineColor;

var start;
var end;
var stack;
var current;
var next;
var character;
var gameActive;
var firstClick = true;
let counter;
let path;

let oset; 
let cset;

function setup(){
  
  var canvas = createCanvas(winWid, winWid);
  // Move the canvas so it’s inside the <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  background(255)
  genMaze(50);
}

function mouseClicked(){
  let mRow = Math.floor(mouseY/w);
  let mCol = Math.floor(mouseX/w);
  let index = mCol + cols * mRow;

  if (index == start.num && firstClick)
  {
    noFill(); 
    strokeWeight(w/10);
    stroke(255)
    circle(mCol*w +w/2, mRow*w+w/2, w/2)
    firstClick = false;
  }
  else if (!firstClick)
  {
    background(backGroundColor)
    for (let i = 0 ; i < grid.length; i++)
    {grid[i].show();}
    astar(index);
    firstClick = true;
  }
}

window.onresize = () =>{
  if (window.innerWidth < 700)
  {winWid = window.innerWidth * .5;}
  else{winWid = window.innerWidth * .4;}
  resizeCanvas(winWid, winWid)
  w = winWid / cols;
  background(backGroundColor)
  for (let e of grid)
  {e.show()}
  console.log(w, cols)
}