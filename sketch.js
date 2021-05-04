var path1, path2, path3, path4
var form
var selector
var flag = "up"
var gameState = 0
var desert
var VCAPLD = "no"


function preload(){
    
}

function setup(){
    createCanvas(displayWidth, displayHeight)

    form = new Form()
    form.display()
    marcus = createSprite(20, displayHeight - 250, 50,50)
    marcus.visible = false

}

function draw(){
    background("White")

    text(mouseX + "," + mouseY, mouseX, mouseY)

    if(gameState === "path1"){
        background(145,236,141)
        forest = new Forest()
        forest.display()
        marcus.visible = true
       
    }

    if(gameState === "path2"){
        background(rgb(207,178,130))
        desert = new Desert()
        desert.display()
        marcus.visible = true
        if(VCAPLD === "no"){
            applyVeloctyX()
            VCAPLD = "yes"
        }
    }

    if(gameState === "path3"){
        background("grey")
        city = new City()
        city.display()
        marcus.visible = true
    }
  

 

    drawSprites();
}

function keyPressed(){
  /*
    if(keyCode === 40 && flag === false && form.selector.y === form.path1.y + 75){
        console.log("Key Pressed");
        form.selector.y = form.path2.y + 75 ;
        flag = true
    }

    if(keyCode === 40 && flag === false && form.selector.y === form.path2.y + 75){
        console.log("Key Pressed");
        form.selector.y = form.path3.y + 75 ;
        flag = true
    }
*/


    if(keyCode === 40 && flag != "bottom"){
       // console.log("Key Pressed");
        form.selector.y =  form.selector.y + 150;
        if(form.selector.y >= form.path4.y - 100){
            flag = "bottom";
        }
    }
    
    if(keyCode === 38 && flag != "up"){
      //  console.log("Key Pressed");
        form.selector.y =  form.selector.y - 150;
        if(form.selector.y <= form.path1.y + 100){
            flag = "up";
        }
    }

    if(keyCode === 13)  
    {
        if(form.selector.y === form.path1.y + 75){

        //    console.log("Selector: ", form.selector.y);
        //   console.log("Path1: ", form.path1.y + 75);
            //background("Lime")
            gameState = "path1"
            form.hide()
        
        }



        if(form.selector.y === form.path2.y + 75){

            //    console.log("Selector: ", form.selector.y);
            //   console.log("Path1: ", form.path1.y + 75);
             //   background("brown")
                gameState = "path2"
                form.hide()
            
            }


            if(form.selector.y === form.path3.y + 75){

                //    console.log("Selector: ", form.selector.y);
                //   console.log("Path1: ", form.path1.y + 75);
                    //background("Lime")
                    gameState = "path3"
                    form.hide()
                
                }

   
    }
}



function applyVeloctyX(){
    desert.ground.addImage(desert.image)
    desert.ground.velocityX = -3
}









