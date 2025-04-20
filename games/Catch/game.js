const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const catchSound = document.getElementById("catch-sound");
const loseSound = document.getElementById("lose-sound");
const oofSound = document.getElementById("damaged-sound");

let basket = {
    x: 175,
    y: 450,
    width : 50,
    height: 20,
    speed: 7
};

let objects = [];
let score = 0;
let lives = 5;

function createObject(){
    let object = {
        x: Math.random()* (canvas.width-20),
        y : 0,
        width: 20,
        height: 20,
        speed: Math.random()*5
    }
    objects.push(object)
}

function drawBasket(){
  ctx.fillStyle = "darkblue";  
  ctx.fillRect(basket.x,basket.y,basket.width,basket.height);
};

function drawScore(){
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function drawLine(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 380, canvas.width, 1)
}

function drawLives(){
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Lives: " + lives, 10, 60)
}

document.addEventListener("keydown", (event) => {
    if((event.key === "a" || event.key === "A" || event.key === "ArrowLeft")&& basket.x > 0){
        basket.x -= basket.speed*5; 

    } else if ((event.key === "d" || event.key === "D" || event.key === "ArrowRight")&& basket.x + basket.width < canvas.width){
        basket.x += basket.speed*5

    } else if((event.key === "w" || event.key === "W" || event.key === "ArrowUp")&& basket.y > 400){
        basket.y -= basket.speed*5

    } else if((event.key === "s" || event.key === "S" || event.key === "ArrowDown")&& basket.y + basket.height + 5 < canvas.height){
        basket.y += basket.speed*5
        
    } else if(lives<=0 && (event.key === "r" || event.key === "R")){
        score = 0;
        lives = 5;
        objects = [];
        update();
    }
});

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawBasket(); //calling the drawbasket function
    drawScore(); //calling the drawscore function
    drawLives(); //calling the drawlives function
    drawLine(); //calling the drawline function


    objects.forEach((obj,index)=>{
        obj.y += obj.speed;

        if (obj.y + obj.height >= basket.y && obj.x+obj.width >= basket.x && obj.x-obj.width <= basket.x+basket.width){
            objects.splice(index,1);
            score++;
            catchSound.play();
        }

        if(obj.y > canvas.height){
            objects.splice(index,1); 
            lives -= 1;
            oofSound.play();
        }

        ctx.fillStyle = "red";
        ctx.fillRect(obj.x, obj.y, obj.width, obj.height);

    })

    if(lives <= 0){
        ctx.fillStyle = "black";
        ctx.font = "30px black";
        ctx.fillText("Game Over!", canvas.width/2-80, canvas.height/2);
        loseSound.play();
        return;
    }

    if (Math.random() < 0.008){
        createObject();
    }

    
    requestAnimationFrame(update);
}

update();