function Aves(){
    this.ave;
    this.aleteo=-3;
    this.gravedad=0.3;
    this.fondo;
    this.vida1;
    this.vida2;
    this.vida3;
    this.dead1;
    this.dead2;
    this.dead3;
    //Mejoras de la vida
    this.vida=3;
    
    this.crear=function(){
        this.ave=createSprite(width/2,height/2,40,40);
       this.ave.addAnimation("ave", "./imagenes/flappy0.png","./imagenes/flappy1.png","./imagenes/flappy2.png");
        this.fondo=loadImage("./imagenes/jungla.png");
        this.vida1=loadImage("./imagenes/life1.png");
        this.vida2=loadImage("./imagenes/life2.png");
        this.vida3=loadImage("./imagenes/life3.png");
        this.dead1=loadImage("./imagenes/dead1.png");
        this.dead2=loadImage("./imagenes/dead2.png");
        this.dead3=loadImage("./imagenes/dead3.png");
        this.ave.rotateToDirection=true;
       
        this.ave.setCollider("circle",0,0,15);
        //this.ave.debug=true;//podemos ver el collider
    }

    this.movimiento=function(){
        this.ave.velocity.x=4;
        this.ave.velocity.y+=this.gravedad;
        if(this.ave.position.y<0){this.ave.position.y=0;}
        if(this.ave.position.y>height){this.ave.position.y=height;}
        if(keyWentDown(" ")){this.ave.velocity.y=this.aleteo;}
        camera.position.x=width/4+this.ave.position.x;
        camera.off();
        image(this.fondo, 0, 0, width, height);
        if(this.vida>-24){image(this.vida1,10,10,this.vida1.width,this.vida1.height);}
        else{image(this.dead1,10,10,this.dead1.width,this.dead1.height);}
        if(this.vida>-48){image(this.vida2,50,10,this.vida2.width,this.vida2.height);}
        else{image(this.dead2,50,10,this.dead2.width,this.dead2.height);}
        if(this.vida>-72){image(this.vida3,90,10,this.vida3.width,this.vida3.height);}
        else{image(this.dead3,90,10,this.dead3.width,this.dead3.height);}
        
        camera.on();
    }

    this.muerte=function(pipe){
        
            if(this.ave.position.y>height-5){juegoTerminado();}
            if(this.ave.overlap(pipe.tuboArray)){
                this.vida--
                
               if(this.vida<-78){
                    juegoTerminado();
                }
            }
            //console.log(this.vida);
        }
        
    


}