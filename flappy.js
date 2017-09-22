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
//revisar la musica
//agregar puntajes
//agregar instrucciones.
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
  
    if(gameOver==true){
        background(255);
        image(imagenFondo,bird.ave.position.x-calibrador, 0, 800, 500);
        start.mousePressed(newGame);
        musica.stop();
    }
    if(gameOver==false){
        calibrador=380;
        pipe.crearTubos(bird);
        pipe.muerteTubos(bird);
        bird.muerte(pipe);
        bird.movimiento();
       
        drawSprites();
        if(musica.isPlaying()){}else{musica.play();}
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
    bird.vida=3;
    updateSprites(true);
    bird.ave.position.x=width/2;
    bird.ave.position.y=height/2;
    bird.ave.velocity.y=0;
    
    start.hide();
}
