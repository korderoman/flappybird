var bird;
var pipe;
var imagenFondo;
var gameOver=true;
var start;
var calibrador;
var musica;
function preload(){
    musica=loadSound("flappy.mp3");
}

function setup(){
    createCanvas(800, 500);
    bird= new Aves();
    pipe=new Tuberias();
    bird.crear();
    pipe.crear();
    imagenFondo=loadImage("./imagenes/portada.png");
    start=createButton("START");
    start.size(150,30);
    start.position(450,350);
    calibrador=400;
    
}



function draw(){
   musical();
    if(gameOver==true){
        background(255);
        image(imagenFondo,bird.ave.position.x-calibrador, 0, 800, 500);
        start.mousePressed(newGame);
        
    }
    if(gameOver==false){
       
        bird.movimiento();
        pipe.crearTubos(bird);
        pipe.muerteTubos(bird);
        bird.muerte(pipe);
        drawSprites();
    }
   

    
}

function juegoTerminado(){
      gameOver=true;
      calibrador=250;
      start.show();
      updateSprites(false); 
      
    
};

function newGame(){
   
    pipe.tuboArray.removeSprites();
    gameOver=false;
    updateSprites(true);
    bird.ave.position.x=width/2;
    bird.ave.position.y=height/2;
    bird.ave.velocity.y=0;
    
    start.hide();
}
function musical(){
    if(gameOver==true){musica.stop();}
    if(gameOver==false){
        if(musica.isPlaying()){

        }else{musica.play();}
        }
}