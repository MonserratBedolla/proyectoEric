class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder","Introduce tu nombre");
    this.playButton=createButton("Jugar");
    this.titleImg=createImg(".assets-title.png", "título del juego");
    this.greeting= createElement(h2);   
  }
  setElementsPosition(){
    this.titleImg.position(120,100);
    this.input.position(width/2-110, height/2-80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }
  display(){
    this.setElementsPosition();
    this.handleMousePressed();
  }
  handleMousePressed(){
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = 
      `Hola ${this.input.value()}
      </br>Espera a que otro jugador se una...`;
      this.greeting.html(message);
      player.name=this.input.value();
      player.index=1;
        }
    )
  }

}
