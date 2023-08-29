

// Déclarer une fonction pour demander le nom d’un personnage
 function askCharacterName(number) { 
     return prompt("Entrez le nom du personnage N°${number} :"); 
    } 
// Déclarer une fonction pour calculer le score d’un personnage 
function calculateCharacterScore(experience, strengthWeapon, powerShield) { 
    return experience + Math.floor(Math.random() * (strengthWeapon + 1)) - Math.floor(Math.random() * (powerShield + 1)); }
// Déclarer une fonction pour afficher le résultat du combat 
function displayFightResult(attacker, defender, attackerScore, defenderScore) { 
    if (attackerScore > defenderScore)  { 
    console.log("${attacker} attaque ${defender} et gagne le combat !"); 
} else if (attackerScore === defenderScore) 
{ console.log("${attacker} attaque ${defender} et le match est nul!"); 
} else { 
    console.log("${attacker} attaque ${defender} mais ne parvient pas à gagner le combat.");
 } }
// Demander les noms des personnages 
const char1 = askCharacterName(1); const char2 = askCharacterName(2);
// Générer aléatoirement les caractéristiques des personnages 
const char1Experience = Math.floor(Math.random() * 10) + 1; const char1StrenghtWeapon = Math.floor(Math.random() * 10) + 1; const char1PowerShield = Math.floor(Math.random() * 10) + 1;
const char2Experience = Math.floor(Math.random() * 10) + 1; const char2StrenghtWeapon = Math.floor(Math.random() * 10) + 1; const char2PowerShield = Math.floor(Math.random() * 10) + 1;
// Demander qui attaque 
const characterWhoAttack = prompt("Qui attaque ? ${char1} ou ${char2} ?");
// Vérifier que le personnage est valide
 if (characterWhoAttack.toLowerCase() !== char1.toLowerCase() && characterWhoAttack.toLowerCase() !== char2.toLowerCase())  { 
    alert("Ce personnage n'est pas valide"); 
    location.reload(); 
}
// Calculer les scores des personnages 
let attackerScore = 0; 
let defenderScore = 0; 
let attacker;
 let defender;
if (characterWhoAttack.toLowerCase() === char1.toLowerCase()) {
     attacker = char1; defender = char2; attackerScore = calculateCharacterScore(char1Experience, char1StrenghtWeapon, char1PowerShield); defenderScore = calculateCharacterScore(char2Experience, char2StrenghtWeapon, char2PowerShield); 
    } else { 
        attacker = char2; defender = char1; attackerScore = calculateCharacterScore(char2Experience, char2StrenghtWeapon, char2PowerShield); defenderScore = calculateCharacterScore(char1Experience, char1StrenghtWeapon, char1PowerShield); }
// Afficher le résultat du combat 
displayFightResult(attacker, defender, attackerScore, defenderScore);


//A partir de if
// Calculate the scores of the characters
function calculateScores(characterWhoAttack) {
    let attackerScore = 0;
    let defenderScore = 0;
    let attacker;
    let defender;
  
    if (characterWhoAttack.toLowerCase() === char1.name.toLowerCase()) {
      attacker = char1;
      defender = char2;
    } else {
      attacker = char2;
      defender = char1;
    }
  
    attackerScore = attacker.calculateScore();
    defenderScore = defender.calculateScore();
  
    return [attacker, defender, attackerScore, defenderScore];
  }
// Afficher le résultat du combat 
function displayFightResult(characterWhoAttack) {
     const [attacker, defender, attackerScore, defenderScore] = calculateScores(characterWhoAttack);
      if (attackerScore > defenderScore) {
         console.log("${attacker.name} attaque ${defender.name} et gagne le combat !"); 
    } else if (attackerScore === defenderScore) {
         console.log("${attacker.name} attaque ${defender.name} et le match est nul!"); 
        } else { 
            console.log("${attacker.name} attaque ${defender.name} mais ne parvient pas à gagner le combat."); 
        } }
// Demander qui attaque 
const CharacterWhoAttack = prompt("Qui attaque ? ${char1.name} ou ${char2.name} ?");
// Vérifier que le personnage est valide 
if (characterWhoAttack.toLowerCase() !== char1.name.toLowerCase() && characterWhoAttack.toLowerCase() !== char2.name.toLowerCase()) { 
    alert("Ce personnage n'est pas valide"); location.reload(); }
// Afficher le résultat du combat displayFightResult(characterWhoAttack);

// Définir une fonction pour vérifier la validité du personnage 
function checkCharacter(character) { 
    return character.toLowerCase() === char1.name.toLowerCase() || character.toLowerCase() === char2.name.toLowerCase();
 }
// Définir une fonction pour afficher un message d’erreur et recharger la page 
function showError() {
     alert("Ce personnage n'est pas valide");
      location.reload(); }  

