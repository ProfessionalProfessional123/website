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

attackBtn.addEventListener("click", () => {
    let playerDamage = Math.floor(Math.random()*player.attack);
    const enemyAction = Math.random() < 1.2 ? "attack" : "defend";
    let enemyDamage = Math.floor(Math.random()*enemy.attack);

    message.innerHTML = "";
    if(enemyAction === "defend"){
        playerDamage = 0
        message.innerHTML += "Enemy blocked your attack! <br>";
    }
    else if (Math.random() < 0.3){
        playerDamage *=2;
        message.innerHTML = "CRITICAL HIT! You dealt double damage! <br>";
    }
    else if (Math.random() < 0.2){
        playerDamage = 0;
        message.innerHTML = "You missed your attack! <br>";
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

    if(enemy.hp <= 0){
        message.innerHTML = "You win!";
        attackBtn.disabled = true;
        restartBtn.style.display = "block";
        player.wins += 1;
    }

        if(player.hp <= 0){
            message.innerHTML = "You lost!";
            attackBtn.disabled = true;
            restartBtn.style.display = "block";
            player.losts += 1;
    }

});

restartBtn.addEventListener("click", () => {
    player.hp = 100 + player.losts*10;
    enemy.hp = 100 + player.wins*10;
    wins.textContent = player.wins;
    losts.textContent = player.losts;
    playerHpText.textContent = player.hp;
    enemyHpText.textContent = enemy.hp;
    attackBtn.disabled = false;
    restartBtn.style.display = "none";
    message.innerHTML = "Game Restarted! Good Luck!";
})