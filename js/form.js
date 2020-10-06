class Form{
    constructor(){
        this.input=createInput("Type player name") 
        this.greeting=createElement("h3")
        this.button=createButton("Submit")
        this.reset=createButton("Reset")
    }
    display(){
        var title=createElement("h2")
        title.html("Car Racing Game")
        title.position(displayWidth/2-50,10)

        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth-100,20)
        this.reset.mousePressed(()=>{
            player.updateCount(0)
            game.update(0)
        })
        this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name= this.input.value()
            playerCount++
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
        
        
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()   
        
    }
}