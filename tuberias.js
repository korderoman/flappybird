function Tuberias(){
    this.imagenTubo;
    this.tubo;
    this.tuboArray;

    this.crear=function(){
        this.imagenTubo=loadImage("./imagenes/pipes.png");
        this.tuboArray=new Group();
    }

    this.crearTubos=function(bird){
       
        if(frameCount%60==0){
            this.altura=random(10, 250);
            //la imagen es de 130x770
            this.alturaImagen=this.imagenTubo.height;
            this.tubo=createSprite(bird.ave.position.x+width,this.alturaImagen-this.altura,10,this.imagenTubo.height);//this.altura
            this.tubo.setCollider("rectangle",0,0,80,this.imagenTubo.height);
            this.tubo.addImage(this.imagenTubo);
          //  this.tubo.debug=true;
           // console.log(this.altura);
            this.tuboArray.add(this.tubo);
           if(this.altura<150){
                var calibracion=70;
               var posiciony=height-this.alturaImagen+calibracion;
          //console.log(posiciony);
               this.tubo=createSprite(bird.ave.position.x+width,posiciony,10,this.imagenTubo.height);
               this.tubo.setCollider("rectangle",0,0,80,this.imagenTubo.height);//definimos colliders de las tuberias como parte del algoritmo
               //this.tubo.debug=true; //observamos el tamaño de los colliders
               this.tubo.mirrorY(-1);
              this.tubo.addImage(this.imagenTubo);
                this.tuboArray.add(this.tubo);
            }
        }
       // console.log(this.tuboArray.length);
        
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