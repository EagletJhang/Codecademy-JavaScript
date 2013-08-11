var slaying = true;
var youHit = Math.random();
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying){
    if(youHit){
        totalDamage += damageThisRound;
        console.log("You hit the dragon and did " + damageThisRound + " damage!");
        if(totalDamage >= 4){
            console.log("You win!");
            slaying = false;
        }
        else{
            console.log("You lose!");
            slaying = false;
        }
    }
    else{
        console.log("You missed!");
        slaying = false;
    }
}
