var a,b;
function setup() {
  createCanvas(800, 400);
  a = createSprite(200,200,100,60)
  a.shapeColor = "teal"
  b = createSprite(400,200,50,30)
  b.shapeColor = "teal"
}

function draw() {
  

  background("white");
  b.x = mouseX
  b.y = mouseY
  console.log(b.y - a.y)
  if(b.x - a.x < (b.width + a.width)/2 && a.x - b.x < (b.width + a.width)/2 && b.y - a.y < (b.height + a.height)/2 && a.y - b.y < (b.height + a.height)/2){
    a.shapeColor = "lime"
    b.shapeColor = "lime"
  } else {
    a.shapeColor = "teal"
    b.shapeColor = "teal"
  }
  drawSprites();
}

