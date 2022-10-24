var box1
function setup() {
  createCanvas(400,400);
 box1=createSprite(160,80,50,50)
}

function draw() 

{
  background("black");
if(keyIsDown(RIGHT_ARROW))
{
  box1.position.x=box1.position.x+5
}
  
  if(keyIsDown(LEFT_ARROW))
{
  box1.position.x=box1.position.x-5
}
drawSprites()
}




