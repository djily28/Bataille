/*
After reading the exercice, the experience of each warriors can't grow up after struggling.


life points default value = 50

life points = life points - attack score.
attack score = experience + random(entre 0 - weapon)
defense score = experience + random(entre 0 - shield)

experience = between 1 and 10 (static)
weapon = between 1 and 10 (static)
shield = between 1 and 10 (static)

*/

// the construction of one Warrior
class Warrior {
    constructor (name, experience, weapon, shield, attackScore = 0, defenseScore = 0, lifePoints = 50) {
        this.name = name;
        this.lifePoints = lifePoints;
        this.attackScore = attackScore;
        this.defenseScore = defenseScore;
        this.experience = experience;
        this.weapon = weapon;
        this.shield = shield;
    }
}


// The birth of each warriors
let Florian = new Warrior("Florian",4,6,9);
let Brice = new Warrior("Brice",7,8,1);
let Aurelien = new Warrior("Aurelien",3,4,6);
let Oyanna = new Warrior("Oyanna",9,2,7);

let attacker;
let defender;



// Array which contains all warriors still alive
let warriorsList = [
    Florian,
    Brice,
    Aurelien,
    Oyanna
]

// Function to select a random warrior throught the array named "warriorsList"
function getRandomWarrior (array) {
    const i = Math.floor(Math.random() * (array.length))
    return array[i]
}


// set a new attacker and defender if both are the same.
function setNewAttackerAndNewDefender (attacker, defender) {
    do {
        attacker = getRandomWarrior(warriorsList);
        defender = getRandomWarrior(warriorsList);
    } while (attacker === defender);

    Battlefield.attacker = attacker
    Battlefield.defender = defender
}

// Battlefied
let Battlefield = {
    attacker: {},
    defender: {}
};

// call of a new setting of the Battefield
setNewAttackerAndNewDefender(attacker,defender)

console.log(Battlefield)













