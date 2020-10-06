class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function(data){
            gameState=data.val()
        })
    }
   update(state){
       database.ref("/").update({gameState:state})
   }
   async start(){
       if(gameState===0){
           player=new Player()
           var playerCountRef=await database.ref("playerCount").once("value")
           if(playerCountRef.exists()){
               playerCount=playerCountRef.val()
               player.getCount()
           }
           form=new Form()
           form.display()
       }
       car1=createSprite(100,200)
       car1.addImage(car1Img)
       car2=createSprite(300,200)
       car2.addImage(car2Img)
       car3=createSprite(500,200)
       car3.addImage(car3Img)
       cars=[car1,car2,car3]
   }
   play(){
       form.hide()
       textSize(30)
       text("The Game Has Started",120,100)
       Player.getPlayerInfo()
       player.getCarsAtEnd()
       if(allPlayers!=undefined){
        background("#c68767")
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
           var index=0
           var x=225                                                      
           var y=0
           var displayPosition=130
           
           for(var plr in allPlayers){                                                                          
               index=index+1
               x=x+266
               y=displayHeight-allPlayers[plr].distance
               cars[index-1].x=x
               cars[index-1].y=y
               /* if(plr==="player"+player.index){
                   fill("red")
               }
               else{
                fill("black")}
                displayPosition+=20
                textSize(15)
                text(allPlayer[plr].name+":"+allPlayer[plr].distance,120,displayPosition) */
                if(index===player.index){
                    //cars[index-1].shapeColor="red"
                    stroke(10)
                    fill("red")
                    ellipse(x,y,50,50)
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
           }

       }
       if(keyIsDown(UP_ARROW)&&player.index!=null){
           player.distance+=50
           player.update()
       }
       if(player.distance>3860){
           gameState=2
           player.rank+=1
           Player.updateCarsAtEnd(player.rank)
        }
   }
   End(){
       console.log("Game Ended")
       console.log("Rank:"+player.rank)
       game.update(2)
   }
}