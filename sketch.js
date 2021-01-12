var tom,jerry;
function preload() {
    //load the images here
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
tom = createSprite(200,150,20,100);
jerry = createSprite(300,300,30,60);
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX = -5;

}

}
