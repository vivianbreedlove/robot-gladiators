var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyName = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

//fight function (now with parameter for enemy's name)
var fight = function(enemyName){
     // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth -  playerAttack;

  
    // Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
);
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  
    playerHealth = playerHealth - enemyAttack
    // Log a resulting message to the console so we know that it worked.
  };
  console.log(
      playerName + "  has " + playerHealth + " health left."
  )
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
console.log(
  playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);
fight();   


if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert("Welcome to Robot Gladiators!Round " + ( i + 1 ));

// pick new enemy to gihht based on the index of the enemyNames array
var pickedEnemyName = enemyNames [i];

//reset enemyHealth before starting new fight
enemyHealth = 50;

 // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
   }

   



// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

// check enemy's health
if (enemyHealth <= 0){
    window.alert(enemyName + " has died!");

}
 else{
     window.alert(enemyName + "still has" + enemyHealth + "health left.");
 }
 
