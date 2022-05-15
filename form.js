class Form {
    constructor(){
        this.input = createInput("").attribute("placeholder","Enter Your Name")
        this.titleImg = createImg()
        this.playButton = createButton("Play")
        this.greeting = createElement("H2")
    }
    setelementposition(){
        this.input.position(20,340);
        this.titleImg.position(120,80);
        this.playButton.position(10,40);
        this.greeting.position(10,20);
    }
    setelementstyle(){
        this.input.class("customInput");
        this.titleImg.class("gameTitle");
        this.greeting.class("greeting");
        this.playButton.class("customButton");
    }
    hide(){
        this.greeting.hide();
        this.playButton.hide();
        this.input.hide();
    }
    handleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.playButton.hide();
            this.input.hide();
            var message = `hello ${this.input.value()}</br> wait for another player to join...`
            this.greeting.html(message)
    })
    }
    display(){
        this.setelementposition();
        this.setelementstyle();
        this.handleMousePressed();
    }
}