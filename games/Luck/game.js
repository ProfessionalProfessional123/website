const player = {
    hp: 100,
    attack: 20,
    wins: 0,
    losts: 0
}

const enemy = {
    hp: 100,
    attack: 15,
    wins: 0
}

const playerHpText = document.getElementById("player-hp");
const enemyHpText = document.getElementById("enemy-hp");
const message = document.getElementById("message");
const attackBtn = document.getElementById("attack-btn");
const body = document.getElementById("game");
const restartBtn = document.getElementById("restart-btn");
const wins = document.getElementById("wins");
const losts = document.getElementById("losts");
const punchSound = document.getElementById("punch-sound");
const spunchSound = document.getElementById("spunch-sound");
const missSound = document.getElementById("miss-sound");
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");
const blockSound = document.getElementById("block-sound");

attackBtn.addEventListener("click", () => {
    let playerDamage = Math.floor(Math.random()*player.attack);
    const enemyAction = Math.random() < 0.85 ? "attack" : "defend";
    let enemyDamage = Math.floor(Math.random()*enemy.attack);
    
 
    message.innerHTML = "";
    if(enemyAction === "defend"){
        playerDamage = 0
        message.innerHTML += "Enemy blocked your attack! <br>";
        blockSound.play();
    }
    else if (Math.random() < 0.25){
        playerDamage *=2;
        message.innerHTML = "CRITICAL HIT! You dealt double damage! <br>";
        spunchSound.play();
    }
    else if (Math.random() < 0.2){
        playerDamage = 0;
        message.innerHTML = "You missed your attack! <br>";
        missSound.play();
    }
    else{
       punchSound.play(); 
    }

    message.innerHTML +=
    `You dealt ${playerDamage} damage! <br>
    Enemy dealt ${enemyDamage} damage!`;

    body.classList.add("hit-effect");
    setTimeout(() => body.classList.remove("hit-effect"),600);

    player.hp = player.hp - enemyDamage;
    enemy.hp = enemy.hp - playerDamage;

    playerHpText.textContent = Math.max(player.hp, 0);
    enemyHpText.textContent = Math.max(enemy.hp, 0);

    if (player.hp <= 0 && enemy.hp <= 0) {
        message.innerHTML = "It's a tie!";
        attackBtn.disabled = true;
        restartBtn.style.display = "block";
    }
    else if(enemy.hp <= 0){
        message.innerHTML = "You win!";
        attackBtn.disabled = true;
        restartBtn.style.display = "block";
        player.wins += 1;
        winSound.play();
    }
    else if(player.hp <= 0){
            message.innerHTML = "You lost!";
            attackBtn.disabled = true;
            restartBtn.style.display = "block";
            player.losts += 1;
            loseSound.play();
    }

   

});

restartBtn.addEventListener("click", () => {
    player.hp = 100 + player.losts*10;
    enemy.hp = 100 + player.wins*10;
    player.hp = player.hp - player.wins*10
    enemy.hp = enemy.hp - player.losts*10
    wins.textContent = player.wins;
    losts.textContent = player.losts;
    playerHpText.textContent = player.hp;
    enemyHpText.textContent = enemy.hp;
    attackBtn.disabled = false;
    restartBtn.style.display = "none";
    message.innerHTML = "Game Restarted! Good Luck!";
})