function Tuberias(){
    this.imagenTubo;
    this.tubo;
    this.tuboArray;

    this.crear=function(){
        this.imagenTubo=loadImage("./imagenes/pipes.png");
        this.tuboArray=new Group();
    }

    this.crearTubos=function(bird){
        this.altura=random(10, 250);
        //la imagen es de 130x770
        this.alturaImagen=this.imagenTubo.height;
        if(frameCount%60==0){
            this.tubo=createSprite(bird.ave.position.x+width,this.alturaImagen-this.altura,10,this.altura);
            this.tubo.addImage(this.imagenTubo);
            this.tuboArray.add(this.tubo);
           if(this.altura<150){
                var calibracion=70;
               var posiciony=height-this.alturaImagen+calibracion;
          //console.log(posiciony);
               this.tubo=createSprite(bird.ave.position.x+width,posiciony,10,this.variacion);
               this.tubo.mirrorY(-1);
                this.tubo.addImage(this.imagenTubo);
                this.tuboArray.add(this.tubo);
            }
        }
      }

    this.muerteTubos=function(bird){
        for(var i=0;i<this.tuboArray.length;i++){
            if(this.tuboArray[i].position.x<bird.ave.position.x-width/2){
                this.tuboArray[i].remove();
            }
        }
       // console.log(this.tuboArray.length);
    }

}