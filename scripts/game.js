class player{
    constructor(n){
        this.num = n;
        this.color = 255
    }
    show = () => {
        let x = this.num % cols;
        let y = Math.floor(this.num / cols)
        background(backGroundColor); 
        for (let e of grid)
        {e.show()}
        fill(this.color)
        circle(x*w+w/2,y*w+w/2,w/2,w/2)
    }
}
var count = document.getElementById("count"); 
let game = () =>{
    gameActive = true;
    noStroke(); 
    character = new player(start.num); 
    character.show();
    path = [];
    let prev;
    update();
}
let update = () =>{
  background(backGroundColor)
  path.push(grid[character.num])
  for (let i = 0; i < path.length-1; i++)
  {
    line(grid[i+1].x, grid[i+1].y, grid[i].x, grid[i].y)
  }
  character.show()
  fill(255,0,0)
  circle(end.x+ w/2, end.y+ w/2, w/2,w/2)
}
function keyPressed() {
    if (gameActive)
    {
      if (keyCode == LEFT_ARROW && (character.num - 1) % cols >= 0 && !isWall(grid[character.num], grid[character.num-1])){
        prev = character.num;
        character.num--;
        update();
        return false;
      }
      else if (keyCode == RIGHT_ARROW && (character.num + 1) % cols < cols && !isWall(grid[character.num], grid[character.num+1])){
        character.num++;
        character.show()
        update();
        return false;
      }
      else if (keyCode == UP_ARROW && character.num > cols && !isWall(grid[character.num], grid[character.num-cols])){
        character.num -= cols;
        character.show()
        update();
        return false;
      }
      else if (keyCode == DOWN_ARROW && character.num < cols * cols - cols && !isWall(grid[character.num], grid[character.num+cols])){
        character.num+=cols;
        character.show()
        update();
        return false;
      }
    }
    return false; 
  }
  